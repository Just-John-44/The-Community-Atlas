# auth_service.py
# Created: Jul 8 2026
# Last Edited: Jul 10 2026
# Author: John Wesley Thompson

from repos import user_repository
from config import settings
import jwt
from time import time

def log_in(username: str, password: str) -> dict | None:
    user_exists = user_repository.check_user(username, password)

    if user_exists:
        session_token = create_JWT()
        return {"session_token": session_token, "username": username}
    else:
        return


def validate_user(session_token: str | None) -> bool:
    if session_token is None:
        return False

    try:
        jwt.decode(session_token, key=settings.jwt_secret, algorithms=settings.jwt_algorithm)

    except jwt.ExpiredSignatureError:
        return False

    except jwt.InvalidTokenError:
        return False

    return True


def register_user(username: str, password: str) -> bool:
    #register user if their username is unique
    exists = user_repository.check_username(username)

    if exists:
        return False

    success = user_repository.add_user(username, password)
    return success


# helper functions
def create_JWT() -> str:
    expiration = int(time()) + settings.jwt_expiration_minutes * 60

    payload = {
        "iss":"joe's dad",
        "exp": expiration
    }

    return jwt.encode(payload=payload, key=settings.jwt_secret, algorithm=settings.jwt_algorithm)

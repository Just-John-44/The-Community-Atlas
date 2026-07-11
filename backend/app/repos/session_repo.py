# session_repo.py
# Created: Jul 9 2026
# Last Edited: Jul 9 2026
# Author: John Wesley Thompson

import redis
import secrets

SESSION_ID_BYTES_LENGTH: int = 32

def check_session(cookie) -> str:
    conn = redis.Redis(host="localhost", port=6379, decode_responses=True)

    conn.get() #get session id

    # compare redis session id with cookie session id

def create_session(cookie) -> None:
    conn = redis.Redis(host="localhost", port=6379, decode_responses=True)

    session_id = secrets.token_urlsafe(SESSION_ID_BYTES_LENGTH)
    conn.set(session_id, "session relevant information") # info like a timestamp, expiration time, user id, etc. would go here

    conn.close()
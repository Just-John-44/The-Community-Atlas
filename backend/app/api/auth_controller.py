# auth_controller.py
# Created: Jul 7 2026
# Last Edited: Jul 10 2026
# Author: John Wesley Thompson

from fastapi import APIRouter, HTTPException, Response, Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel
from typing import Annotated

from services import auth_service

# DTOs
class LoginRequest(BaseModel):
    username: str
    password: str

class RegisterRequest(BaseModel):
    username: str
    password: str

router: APIRouter = APIRouter(prefix="/api/auth", tags=["Auth"])

security = HTTPBearer()


@router.post("/login")
async def login(request: LoginRequest):
    response = auth_service.log_in(request.username, request.password)

    if response is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    return {"session_token": response["session_token"], "username": response["username"]}


@router.get("/validate")
async def validate(
    authorization: Annotated[HTTPAuthorizationCredentials, Depends(security)]
):
    if not auth_service.validate_user(authorization.credentials):
        raise HTTPException(status_code=401, detail="Invalid token")

    return Response(status_code=204)

@router.post("/register")
async def register(request: RegisterRequest):
    success = auth_service.register_user(request.username, request.password)
    if not success:
        raise HTTPException(status_code=409, detail="Username already exists")

    return Response(status_code=204)

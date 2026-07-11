# main.py
# Created: Jul 8 2026
# Last Edited: Jul 8 2026
# Author: John Wesley Thompson

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import auth_controller


app: FastAPI = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(auth_controller.router)

# config.py
# Created: Jul 9 2026
# Last Edited: Jul 9 2026
# Author: John Wesley Thompson


from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # JWT variables 
    jwt_secret: str
    jwt_algorithm: str
    jwt_expiration_minutes: int

    # PostgreSQL database variables
    postgres_host: str
    postgres_database: str
    postgres_user: str
    postgres_password: str
    postgres_port: str


    class Config:
        env_file = "backend/app/.env"

settings = Settings()

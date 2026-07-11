# user_repository.py
# Created: Jul 9 2026
# Last Edited: Jul 10 2026
# Author: John Wesley Thompson

import psycopg
from config import settings


def check_user(username: str, password: str) -> bool:
    conn = None
    cur = None

    try:
        conn = psycopg.connect(
            host=settings.postgres_host,
            dbname=settings.postgres_database,
            user=settings.postgres_user,
            password=settings.postgres_password,
            port=settings.postgres_port
        )

        cur = conn.cursor()

        cur.execute(
            """
            SELECT 1 FROM users WHERE usr_name = %s AND usr_pw = %s LIMIT 1
            """,
            (username, password)
        )

        row = cur.fetchone()

        if row is None:
            return False

        return True

    except:
        return False

    finally:
        if cur is not None:
            cur.close()

        if conn is not None:
            conn.close()


def check_username(username: str) -> bool:
    conn = None
    cur = None

    try:
        conn = psycopg.connect(
            host=settings.postgres_host,
            dbname=settings.postgres_database,
            user=settings.postgres_user,
            password=settings.postgres_password,
            port=settings.postgres_port
        )

        cur = conn.cursor()

        cur.execute(
            """
            SELECT 1 FROM users WHERE usr_name = %s LIMIT 1
            """,
            (username,)
        )

        row = cur.fetchone()

        if row is None:
            return False

        return True

    except:
        return False

    finally:
        if cur is not None:
            cur.close()

        if conn is not None:
            conn.close()


def add_user(username: str, password: str) -> bool:
    conn = None
    cur = None

    try:
        conn = psycopg.connect(
            host=settings.postgres_host,
            dbname=settings.postgres_database,
            user=settings.postgres_user,
            password=settings.postgres_password,
            port=settings.postgres_port
        )

        cur = conn.cursor()

        cur.execute(
            """
            INSERT INTO users (usr_name, usr_pw) VALUES (%s, %s);
            """,
            (username, password)
        )

        conn.commit()

        return True

    except:
        return False

    finally:
        if cur is not None:
            cur.close()

        if conn is not None:
            conn.close()
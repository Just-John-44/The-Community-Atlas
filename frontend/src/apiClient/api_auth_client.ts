// api_auth_client.ts
// Created: Jul 10 2026
// Last Edited: Jul 10 2026
// Author: John Wesley Thompson

const HOST = "http://localhost:8000";
const API_AUTH_PREFIX = "/api/auth";

type LoginResponse = {
    username: string;
    sessionToken: string;
}

export async function validateSessionToken(sessionToken: string | null) : Promise<boolean> {
    const response = await fetch(`${HOST}${API_AUTH_PREFIX}/validate`, {
        headers: {
            authorization: `Bearer ${sessionToken}`
        }
    });

    return response.ok ? true : false
}


export async function loginUser(username: string | null, password: string | null) : Promise<LoginResponse | null> {
    if (!username || !password) return null;

    const response = await fetch(`${HOST}${API_AUTH_PREFIX}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    });

    if (!response.ok) return null;

    const data = await response.json();

    return {username: data.username, sessionToken: data.session_token};
}

export async function registerUser(username: string | null, password: string | null): Promise<void> {
    await fetch(`${HOST}${API_AUTH_PREFIX}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    });

    return;
}
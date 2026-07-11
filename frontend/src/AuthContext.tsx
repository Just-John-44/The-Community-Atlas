// AuthContext.ts
// Created: Jul 8 2026
// Last Edited: Jul 10 2026
// Author: John Wesley Thompson

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { loginUser, validateSessionToken, registerUser } from "./apiClient/api_auth_client";

// Types used within the authorization context
type User = {
    username: string;
}

type AuthContextType = {
    user: User | null;
    loading: boolean;
    sessionValid: boolean;
    login: (username: string | null, password: string | null) => Promise<boolean>;
    logout: () => void;
    register: (username: string | null, passowrd: string | null) => Promise<void>;
    refreshSession: () => Promise<void>;
}

// Create authorization context
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider(props: { children: ReactNode }){
    const children = props.children;

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [sessionValid, setSessionValid] = useState(false);

    async function login(username: string | null, password: string | null): Promise<boolean> {
        const userData = await loginUser(username, password);

        if (!userData){
            setUser(null);
            setSessionValid(false);
            localStorage.removeItem("session_token");
            return false;
        }

        setUser({username: userData.username});
        setSessionValid(true);
        localStorage.setItem("session_token", userData.sessionToken);
        return true;
    }

    function logout(): void {
        setUser(null);
        setSessionValid(false);
        localStorage.removeItem("session_token");
        return;
    }

    async function register(username: string | null, password: string | null): Promise<void> {
        await registerUser(username, password);
    }

    async function refreshSession(): Promise<void> {
        return; // TO DO
    }


    useEffect(() => {
        const sessionToken = localStorage.getItem("session_token");

        async function checkAuth() {
            if (!sessionToken) {
                setUser(null);
                setSessionValid(false);
                setLoading(false);
                return;
            }

            const sessionValid = await validateSessionToken(sessionToken);

            if (!sessionValid) {
                setUser(null);
                setSessionValid(false);
                setLoading(false);
                localStorage.removeItem("session_token");
                return;
            }

            setUser(null);
            setSessionValid(true);
            setLoading(false);
        }

        checkAuth();
    }, []);

    const authContextValue: AuthContextType = {
        user,
        loading,
        sessionValid,
        login,
        logout,
        register,
        refreshSession
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

// Create hook for context and enforce hook scope
export function useAuth(){
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth should only be used within AuthProvider");
    }

    return context;
}

// ProtectedRoute.tsx
// Created: Jul 8 2026
// Last Edited: Jul 10 2026
// Author: John Wesley Thompson


import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import type { ReactNode } from "react";


import {useAuth} from "./AuthContext.tsx";


function ProtectedRoute(props: {children: ReactNode}){
    const children = props.children;

    const navigate = useNavigate();

    const { sessionValid, loading } = useAuth();

    useEffect(() => {
        if (!loading && !sessionValid){
            console.log("[ProtectedRoute]: Invalid session token. Navigating to login.");
            navigate("/login");
        }
    }, [loading, sessionValid, navigate]);

    if (loading || !sessionValid) {
        return null;
    }

    return children;
}

export default ProtectedRoute

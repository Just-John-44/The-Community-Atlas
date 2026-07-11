// LoginPage.tsx
// Created: Jul 8 2027
// Last Edited: Jul 10 2027
// Author: John Wesley Thompson

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../AuthContext";

function LoginPage () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { login, register } = useAuth();

    async function handleSubmission(event: React.SubmitEvent) {
        event.preventDefault();

        const nativeEvent = event.nativeEvent as SubmitEvent;
        const submitter = nativeEvent.submitter as HTMLButtonElement | null;
        const action = submitter?.value;

        if (action === "login"){
            const success = await login(username, password);

            if (!success) {
                console.log("Login failed");
                setUsername("");
                setPassword("");
                return;
            }

            console.log("Login success");
            navigate("/");

            return;
        }

        if (action === "register"){
            await register(username, password);
            console.log("register clicked");
            setUsername("");
            setPassword("");
            return;
        }
    }

    return (
        <>
            <h1>Log In Page</h1>

            <form onSubmit={handleSubmission}>
                <label htmlFor="id">Username</label>
                <input
                    id="id"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="name">Password</label>
                <input
                    id="name"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" name="action" value="login">Log In</button>
                <button type="submit" name="action" value="register">Register</button>
            </form>

        </>
    )
}

export default LoginPage

// HomePage.tsx
// Created: Jul 8 2026
// Last Edited: Jul 10 2026
// Author: John Wesley Thompson

import { useState } from "react";
import { useAuth } from "../AuthContext";

function HomePage() {
    const [btnClicks, setClicks] = useState(0);

    const { logout } = useAuth();

    function handleIncrClick() {
        setClicks(prev => prev + 1)
    }

    return (
        <>
            <h1> Don't forget to pray </h1>

            <button onClick={handleIncrClick}>Click me to increment {btnClicks}</button>

            <button onClick={logout}>Log Out</button>
        </>
    )
}

export default HomePage
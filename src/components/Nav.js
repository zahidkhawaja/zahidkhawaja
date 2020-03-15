import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className = "nav">
            <button onClick = {toggleDarkMode}>Dark Mode</button>
        </div>
    )
}

export default Nav;
import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import Switch from '@material-ui/core/Switch';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className = "nav">
            <Switch checked = {darkMode} color = "secondary" onClick = {toggleDarkMode} ></Switch>
        </div>
    )
}

export default Nav;
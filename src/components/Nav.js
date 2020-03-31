import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    const DarkSwitch = withStyles({
        switchBase: {
          color: "#f8f8ff",
          '&$checked': {
            color: "#32CD32",
          },
          '&$checked + $track': {
            backgroundColor: "#32CD32",
          },
        },
        checked: {},
        track: {},
      })(Switch);

    return (
        <div className = "nav">
            <div className = "switch">
            <DarkSwitch checked = {darkMode} color = "secondary" onClick = {toggleDarkMode} ></DarkSwitch>
            </div>
        </div>
    )
}

export default Nav;
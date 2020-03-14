import React from "react";
import { NavLink } from "react-router-dom";
import Zahid from "../images/Zahid.jpeg";

const Header = () => {
    return (
        <div className = "header">
        <div className = "titles">
            <img className = "zahid" src = {Zahid}/>
        <h1>Zahid Khawaja</h1>
        <h2>Web developer in Atlanta</h2>
        </div>
        <nav className = "social">
          <a href = "https://twitter.com/wizkhawaja">Twitter</a>
          <a href = "https://github.com/zahidkhawaja">GitHub</a>
          <a href = "https://www.linkedin.com/in/zahidkhawaja">LinkedIn</a>
          <a href = "https://hackernoon.com/@zahid">Hacker Noon</a>
          <a href = "mailto:zahidkhawaja@icloud.com">Email</a>
        </nav>
        <div className = "views">
        <nav className = "bio">
        <NavLink activeClassName = "active" exact={true} to = "/">Intro</NavLink>
        <NavLink activeClassName = "active" to = "/skills">Skills</NavLink>
        <NavLink activeClassName = "active" to = "/website">Website</NavLink>
        </nav>
        </div>
        </div>

    )
}

export default Header;
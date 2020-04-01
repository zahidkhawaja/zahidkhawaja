import React from "react";
import { NavLink } from "react-router-dom";
import Zahid from "../images/Zahid.jpeg";

const Header = () => {
    return (
        <div className = "header">
        <div className = "titles">
            <img className = "zahid" src = {Zahid} alt = "zahid"/>
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
        <NavLink activeClassName = "active" exact={true} to = "/"><p>Intro</p></NavLink>
        <NavLink activeClassName = "active" to = "/projects"><p>Projects</p></NavLink>
        <NavLink activeClassName = "active" to = "/experiments"><p>Experiments</p></NavLink>
        </nav>
        </div>
        </div>

    )
}

export default Header;
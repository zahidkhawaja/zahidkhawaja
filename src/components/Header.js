import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className = "header">
        <div className = "titles">
        <h1>Zahid Khawaja</h1>
        <h2>Web developer in Atlanta</h2>
        </div>
        <nav className = "social">
          <a href = "https://twitter.com/wizkhawaja">Twitter</a>
          <a href = "https://github.com/zahidkhawaja">GitHub</a>
          <a href = "https://github.com/zahidkhawaja">Medium</a>
          <a href = "https://www.linkedin.com/in/zahidkhawaja/">LinkedIn</a>
          <a href = "mailto:zahidkhawaja@icloud.com">Email</a>
          <a href = "">Newsletter</a>
        </nav>
        <div className = "views">
        <nav className = "bio">
        <NavLink to = "/">Intro</NavLink>
        <NavLink to = "/skills">Skills</NavLink>
        <NavLink to = "/about-site">About This Site</NavLink>
        </nav>
        </div>
        </div>

    )
}

export default Header;
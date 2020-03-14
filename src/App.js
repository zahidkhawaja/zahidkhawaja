import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className = "primary">
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
        <a href = "">Intro</a>
        <a href = "">Skills</a>
        <a href = "">About This Site</a>
        </nav>
        </div>
        <div className = "viewcontent">
        <p>Hey there! My name is Zahid and I'm a full stack web developer. I'm passionate about FOSS, WebXR, and minimalistic design. I also enjoy producing music!</p>
        </div>
        

      </div>
    </div>
  );
}

export default App;

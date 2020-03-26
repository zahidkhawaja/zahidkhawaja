import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <div className = "primary">

      <Switch>

        <Route path = "/projects">
        <Nav/>
        <Header/>
        <Projects/>
        </Route>

        <Route path = "/skills">
        <Nav/>
        <Header/>
        <Skills/>
        </Route>

        <Route path = "/">
        <Nav/>
        <Header/>
        <Intro/>
        </Route>

      </Switch>

      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <div className = "primary">

      <Switch>

        <Route path = "/website">
        <Nav/>
        <Header/>
        <About/>
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

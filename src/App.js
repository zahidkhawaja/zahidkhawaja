import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <div className = "primary">

      <Switch>

        <Route path = "/website">
        <Header/>
        <About/>
        </Route>

        <Route path = "/skills">
        <Header/>
        <Skills/>
        </Route>

        <Route path = "/">
        <Header/>
        <Intro/>
        </Route>

      </Switch>

      </div>
    </div>
  );
}

export default App;

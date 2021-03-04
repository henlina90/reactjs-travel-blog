import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";
import Subscribe from "./components/pages/Subscribe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/explore" component={Explore} />
          <Route path="/subscribe" component={Subscribe} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

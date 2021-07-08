import "./styles.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";
import Home from "./Components/Home";
import About from "./Components/About";
import Register from "./Components/Register";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Login} />
        <Route exact path="/info" component={Info} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";
import "./App.css";

const App = () => (
  <Router>
    <Switch>{routes}</Switch>
  </Router>
);

export default App;

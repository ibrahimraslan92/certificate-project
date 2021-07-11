import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
}

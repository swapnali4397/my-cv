import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Home from "./Components/Pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="wrap-content">
      <div className="container">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    </div>
  );
};

export default App;

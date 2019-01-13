import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Demo from "../Demo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Demo} />
      </BrowserRouter>
    );
  }
}

export default App;

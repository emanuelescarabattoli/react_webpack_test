import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../sore";
import Demo from "../Demo";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Demo} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

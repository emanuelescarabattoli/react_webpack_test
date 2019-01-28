import React, { Component } from "react";

class Demo extends Component {

  render() {
    const url = process.env.URL;
    return (
      <div>{url}</div>
    );
  }
}

export default Demo;

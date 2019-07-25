import React, { Component } from "react";
import ReactTopProgressBar from "react-top-progress-bar";


class Demo extends Component {

  render() {
    const url = process.env.URL;
    return (
      <div>
        <ReactTopProgressBar striped value={50} />
        {url}
      </div>
    );
  }
}

export default Demo;

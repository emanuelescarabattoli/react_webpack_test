import React from "react";
import ReactDOM from "react-dom";

import style from "./index.scss"

const Index = () => {
  return <p className={style.test}>Hello Pippo!</p>;
};

ReactDOM.render(<Index />, document.getElementById("index"));

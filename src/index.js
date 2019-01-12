import React from "react";
import ReactDOM from "react-dom";

import style from "./index.scss"

import horse from './horse.png'

const Index = () => {
  return <p className={style.test}><img src={horse}/>Hello Pippo!</p>;
};

ReactDOM.render(<Index />, document.getElementById("index"));

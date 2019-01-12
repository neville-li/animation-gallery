import React from "react";
import ReactDOM from "react-dom";

import DrawingJourneyApp from "./js/DrawingJourneyApp";
import canvases from "./js/canvasJS/canvas";

import "./styles/styles.scss";

ReactDOM.render(<DrawingJourneyApp />, document.querySelector("#root"));

for (let canvas of canvases){
    canvas();
}


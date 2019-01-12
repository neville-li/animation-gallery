import React from "react";
import ReactDOM from "react-dom";

import CanvasGalleryApp from "./js/CanvasGalleryApp";
import canvases from "./js/canvasJS/canvas";

import "./styles/styles.scss";

ReactDOM.render(<CanvasGalleryApp />, document.querySelector("#root"));

for (let canvas of canvases){
    canvas();
}


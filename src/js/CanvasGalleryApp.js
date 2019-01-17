import React from "react";

import Drawing from "./Drawing";
import Navbar from "./Navbar";
import canvases from "./canvasJS/canvas";

let id = 1;
let pageNumber = id + 1;

class CanvasGalleryApp extends React.Component {

    render() {
        return (
            <div className="position-relative">
                <Drawing drawingID={id}/>
                <Navbar pageNumber={pageNumber} total={canvases.length}/>
            </div>
        );
    }
}

export default CanvasGalleryApp;
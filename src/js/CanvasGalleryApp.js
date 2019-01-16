import React from "react";

import Drawing from "./Drawing";
import Navbar from "./Navbar";


let id = 1;
let pageNumber = id + 1;

class CanvasGalleryApp extends React.Component {
    render() {
        return (
            <div className="position-relative">
                <Drawing drawingID={id}/>
                <Navbar pageNumber={pageNumber}/>
            </div>
        );
    }
}

export default CanvasGalleryApp;
import React from "react";

import Drawing from "./Drawing";
import Navbar from "./Navbar";


class CanvasGalleryApp extends React.Component {
    render() {
        return (
            <div className="position-relative">
                <Drawing drawingID={0}/>
                <Navbar pageNumber={0+1}/>
            </div>
        );
    }
}

export default CanvasGalleryApp;
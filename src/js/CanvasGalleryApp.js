import React from "react";

import Drawing from "./Drawing";
import Navbar from "./Navbar";


class CanvasGalleryApp extends React.Component {
    render() {
        return (
            <div>
                <Drawing drawingID={0}/>
            </div>
        );
    }
}

export default CanvasGalleryApp;
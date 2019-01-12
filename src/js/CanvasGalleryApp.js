import React from "react";

import Drawings from "./Drawings";
import Navbar from "./Navbar";

class CanvasGalleryApp extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Drawings />
            </div>
        );
    }
}

export default CanvasGalleryApp;
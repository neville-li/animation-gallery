import React from "react";

import Drawings from "./Drawings";
import Navbar from "./Navbar";

class DrawingJourneyApp extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Drawings />
            </div>
        );
    }
}

export default DrawingJourneyApp;
import React from "react";

import Display from "./Display";
import Navbar from "./Navbar";
import canvases from "./canvasJS/canvas";

let id = 1;
let pageNumber = id + 1;

class CanvasGalleryApp extends React.Component {
    constructor(props){
        super(props);
        this.toNext = this.toNext.bind(this);
        this.toPrevious = this.toPrevious.bind(this);
        this.state = {
            currentID: 0
        }
    }

    toNext(){
        this.setState((state) => {
            return {
                currentID: state.currentID + 1
            }
        });
    }

    toPrevious(){
        this.setState((state) => {
            return {
                currentID: state.currentID - 1
            }
        });
    }

    render() {
        return (
            <div className="position-relative">
                <Display drawingID={this.state.currentID}/>
                <Navbar
                    pageNumber={this.state.currentID + 1}
                    total={canvases.length}
                    toNext={this.toNext}
                    toPrevious={this.toPrevious}   
                />
            </div>
        );
    }
}

export default CanvasGalleryApp;
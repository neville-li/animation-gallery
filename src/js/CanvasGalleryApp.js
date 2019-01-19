import React from "react";

import Display from "./Display";
import Navbar from "./Navbar";
import canvases from "./canvasJS/canvas";

class CanvasGalleryApp extends React.Component {
    constructor(props){
        super(props);
        this.toFirst = this.toFirst.bind(this);
        this.toLast = this.toLast.bind(this);
        this.toNext = this.toNext.bind(this);
        this.toPrevious = this.toPrevious.bind(this);
        this.state = {
            currentID: parseInt(localStorage.getItem("currentID"), 10) || 0,
            total: canvases.length
        }
    }

    toFirst(){
        this.setState((state) => {
            const id = 0
            localStorage.setItem("currentID", id);
            return {
                currentID: id
            }
        });
    }

    toLast(){
        this.setState((state) => {
            const id = state.total - 1;
            localStorage.setItem("currentID", id);
            return {
                currentID: id
            }
        });
    }

    toNext(){
        this.setState((state) => {
            const id = state.currentID + 1
            localStorage.setItem("currentID", id);
            return {
                currentID: id
            }
        });
    }

    toPrevious(){
        this.setState((state) => {
            const id = state.currentID - 1
            localStorage.setItem("currentID", id);
            return {
                currentID: id
            }
        });
    }



    render() {
        return (
            <div className="position-relative">
                <Display drawingID={this.state.currentID}/>
                <Navbar
                    pageNumber={this.state.currentID + 1}
                    total={this.state.total}
                    toFirst={this.toFirst}
                    toLast={this.toLast}
                    toNext={this.toNext}
                    toPrevious={this.toPrevious}   
                />
            </div>
        );
    }
}

export default CanvasGalleryApp;
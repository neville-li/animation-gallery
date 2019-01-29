import React from "react";

import Display from "./Display";
import Navbar from "./Navbar";
import canvases from "./canvasJS/canvases";

class CanvasGalleryApp extends React.Component {
    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
        this.state = {
            currentID: parseInt(localStorage.getItem("currentID"), 10) || 0,
            total: canvases.length
        }
    }

    changePage(e){
        let name = e.currentTarget.name;
        switch(name){
            case "first":
                this.setState((state) => {
                    const id = 0
                    localStorage.setItem("currentID", id);
                    return {
                        currentID: id
                    }
                });
                break;
            case "last":
                this.setState((state) => {
                    const id = state.total - 1;
                    localStorage.setItem("currentID", id);
                    return {
                        currentID: id
                    }
                });
                break;
            case "next":
                this.setState((state) => {
                    const id = state.currentID + 1
                    localStorage.setItem("currentID", id);
                    return {
                        currentID: id
                    }
                });
                break;
            case "previous": 
                this.setState((state) => {
                    const id = state.currentID - 1
                    localStorage.setItem("currentID", id);
                    return {
                        currentID: id
                    }
                });
                break;
            case "select":
                const id = e.target.value - 1;
                localStorage.setItem("currentID", id);
                this.setState(() => {  
                    return {
                        currentID: id
                    }
                });
                break; 
        }
    }
    render() {
        return (
            <div className="position-relative">
                <Display drawingID={this.state.currentID}/>
                <Navbar
                    pageNumber={this.state.currentID + 1}
                    total={this.state.total}
                    changePage={this.changePage}
                />
            </div>
        );
    }
}

export default CanvasGalleryApp;
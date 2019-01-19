import React from "react";
import canvases from "./canvasJS/canvases";
import Drawing from "./canvasJS/drawing"

class Display extends React.Component {
    constructor(props){
        super(props);
        this.loadCanvas = this.loadCanvas.bind(this);
        this.reloadCanvas = this.reloadCanvas.bind(this);
    }

    loadCanvas(){
        const drawing = document.querySelector(".drawing");
        const canvas = Drawing.appendCanvas(drawing);
        canvases[this.props.drawingID](canvas);
    }

    reloadCanvas(){
        Drawing.removeCanvas(document.querySelector(".drawing > canvas"));
        this.loadCanvas()
    }

    componentDidMount(){
        this.loadCanvas();
        window.onresize = this.reloadCanvas;
    }

    componentDidUpdate(){
        this.reloadCanvas();
    }

    render(){
        return (
            <div className="drawing"></div>   
        )
    }
}

export default Display;
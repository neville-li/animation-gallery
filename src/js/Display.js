import React from "react";
import canvases from "./canvasJS/canvas";
import Drawing from "./canvasJS/drawing"

class Display extends React.Component {

    componentDidMount(){
        const canvas = Drawing.createCanvas(document.querySelector(".drawing"));
        canvases[this.props.drawingID](canvas);
    }

    componentDidUpdate(){
        Drawing.removeCanvas();
        const canvas = Drawing.createCanvas(document.querySelector(".drawing"));
        canvases[this.props.drawingID](canvas);
    }

    render(){
        return (
            <div className="drawing"></div>   
    )}
}

export default Display;
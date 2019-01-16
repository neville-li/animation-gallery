import React from "react";
import canvases from "./canvasJS/canvas";

class Drawing extends React.Component {

    componentDidMount(){
        canvases[this.props.drawingID]();
    }

    render(){
        return (
        <div>
            <canvas className="drawing"></canvas>
        </div>   
    )}
}

export default Drawing;
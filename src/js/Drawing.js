import React from "react";
import canvases from "./canvasJS/canvas";

class Drawing extends React.Component {

    componentDidMount(){
        canvases[this.props.drawingID]();
    }

    render(){
        return (
        <div className="drawing"></div>   
    )}
}

export default Drawing;
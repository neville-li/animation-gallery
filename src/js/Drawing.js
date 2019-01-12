import React from "react";

const Drawing = (props) => {
    return (
        <div>
            <canvas className="drawing" id={`canvas${props.drawingID}`}></canvas>
        </div>   
    );
}

export default Drawing;
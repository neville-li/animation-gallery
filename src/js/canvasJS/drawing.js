class Drawing {
    static appendCanvas(parentElement){
        const canvas = document.createElement("canvas");
        canvas.width = parentElement.clientWidth;
        canvas.height = parentElement.clientHeight;
        parentElement.appendChild(canvas);
        return canvas;
    }
    static removeCanvas(canvas){
        canvas.remove()
    }

}

export default Drawing;
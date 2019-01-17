class Drawing {
    constructor(parentElement){
        this.parentElement = parentElement;
    }
    createCanvas(background, width=this.parentElement.clientWidth, height=this.parentElement.clientHeight){
        const canvas = document.createElement("canvas");
        canvas.id = "canvasCreatedByDrawingClass";
        canvas.width = width;
        canvas.height = height;
        canvas.style.background = background;
        this.parentElement.appendChild(canvas);
        return canvas;
    }
    removeCanvas(){
        document.querySelector("#canvasCreatedByDrawingClass").remove();
    }
}

export default Drawing;
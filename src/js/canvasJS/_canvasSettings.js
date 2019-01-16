const setCanvas = (canvas, width, height, background) => {
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = background;
    
    return canvas;
}

export default setCanvas;
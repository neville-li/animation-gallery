function canvas0() {
    const canvas = document.querySelector("#canvas0");

    const height = canvas.offsetHeight;
    const width = canvas.offsetWidth;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    const c = canvas.getContext("2d");

    const maxWidth = width / 4;
    const maxHeight = height / 8;
    const paddingX = width / 15;

    const lineStartX = paddingX;
    const lineStartY = height / 4;

    const arcStartX = (width * 2 / 3 + width * 1 / 3) / 2;
    const arcStartY = height / 4;


    //Lines
    c.beginPath();
    c.moveTo(lineStartX, lineStartY);
    c.lineTo(lineStartX + maxWidth, lineStartY);
    c.stroke();

    c.beginPath();
    c.strokeStyle = "blue";
    c.lineWidth = 10;
    c.lineCap = "round";
    c.moveTo(lineStartX, lineStartY + maxHeight);
    c.lineTo(lineStartX + maxWidth, lineStartY + maxHeight);
    c.stroke();

    c.beginPath();
    c.strokeStyle = "red";
    c.lineJoin = "round";
    c.lineWidth = 2;
    c.moveTo(lineStartX, lineStartY + (2 * maxHeight));
    c.lineTo(lineStartX + maxWidth / 3, lineStartY + (2 * maxHeight) - maxHeight / 2);
    c.lineTo(lineStartX + maxWidth * 2 / 3, lineStartY + (2 * maxHeight) + maxHeight / 2);
    c.lineTo(lineStartX + maxWidth, lineStartY + (2 * maxHeight));
    c.stroke();

    c.beginPath();
    c.strokeStyle = "purple";
    c.lineJoin = "round";
    c.lineWidth = 2;
    c.moveTo(lineStartX, lineStartY + (3 * maxHeight));
    c.lineTo(lineStartX + maxWidth, lineStartY + (3 * maxHeight));
    c.lineTo(lineStartX + maxWidth, lineStartY + (3 * maxHeight) + maxHeight);
    c.lineTo(lineStartX, lineStartY + (3 * maxHeight) + maxHeight);
    c.lineTo(lineStartX, lineStartY + (3 * maxHeight));
    c.fillStyle = "yellow";
    c.fill();
    c.stroke();

    //Arcs
    //context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    // angles in radian

    c.beginPath();
    c.strokeStyle = "black";
    c.arc(arcStartX, arcStartY, maxHeight / 2, Math.PI, 0, true);
    c.stroke();

    c.beginPath();
    c.strokeStyle = "black";
    c.arc(arcStartX, arcStartY + 2 * maxHeight, maxHeight / 2, 0, 2 * Math.PI, true);
    c.fillStyle = 'cyan';
    c.fill();
    c.stroke();
}


export default canvas0;
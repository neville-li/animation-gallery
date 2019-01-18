export class Circle {
    constructor(props){
        this.x = props.x;
        this.y = props.y;
        this.radius = props.radius;
        this.strokeStyle = props.strokeStyle || "black";
        this.fillStyle = props.fillStyle || "white";
        this.lineWidth = props.lineWidth || 1;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        context.lineWidth = this.lineWidth;
        context.fillStyle = this.fillStyle;
        context.fill();
        context.strokeStyle = this.strokeStyle;
        context.stroke();
    }
}

export class Line {
    constructor(props){
        this.startX = props.startX;
        this.startY = props.startY;
        this.endX = props.endX;
        this.endY = props.endY;
        this.length = Math.sqrt(((this.endY - this.startY) ** 2) + ((this.endX - this.startX) ** 2));
        this.lineCap = props.lineCap || "butt";
        this.strokeStyle = props.strokeStyle || "black";
        this.lineWidth = props.lineWidth || 1;
    }
    draw(context) {
        context.beginPath();
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        context.lineCap = this.lineCap;
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.strokeStyle;
        context.stroke();
    }
}
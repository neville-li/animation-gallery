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

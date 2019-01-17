import {Circle} from "./shapes";

const canvas1 = (canvas) => {
   
    canvas.style.background = "white";
    const {width, height} = canvas;
    const c = canvas.getContext("2d");

    let radius = width > height ? height * 2/5 : width * 2 / 5;

    const clockFrame = new Circle({
        x: width/2,
        y: height/2,
        radius
    });

    class Line {
        constructor(x, y, length){
            this.x = x;
            this.y = y;
            this.length = length;
            this.intVar = new Date().getSeconds();
            this.endX = this.x + this.length * Math.cos(2 * Math.PI * this.intVar/60);
            this.endY =  this.y + this.length * Math.sin(2 * Math.PI * this.intVar/60);
        }

        draw(){
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(this.endX, this.endY);
            c.stroke();
        }
        update() {
            this.intVar = new Date().getSeconds();
            this.endX = this.x + this.length * Math.cos(2 * Math.PI * this.intVar/60);
            this.endY = this.y + this.length * Math.sin(2 * Math.PI * this.intVar/60);
        }
    }

    let secondHand = new Line(width/2, height/2, 4/5 * radius);
        
    clockFrame.draw(c);
    secondHand.draw();

    setInterval(() => {
        c.clearRect(0, 0, width, height);
        clockFrame.draw(c);

        secondHand.draw();
        secondHand.update();
    }, 1000);
   
}

export default canvas1;
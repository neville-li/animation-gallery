import {Circle, Line} from "./shapes";

const canvas1 = (canvas) => {
   
    canvas.style.background = "white";
    const {width, height} = canvas;
    const c = canvas.getContext("2d");
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width > height ? height * 2/5 : width * 2 / 5;

    class Hand extends Line {
        constructor(props){
            super(props);
            this.timeUnit = props.timeUnit;
            this.interval = props.interval;
            this.length = props.length;
            this.startX = centerX - 0.1 * this.length * Math.cos(2 * Math.PI * this.timeUnit / this.interval);
            this.startY = centerY - 0.1 * this.length * Math.sin(2 * Math.PI * this.timeUnit / this.interval);
            this.endX =  centerX + 0.8 * this.length * Math.cos(2 * Math.PI * this.timeUnit / this.interval);
            this.endY = centerY + 0.8 * this.length * Math.sin(2 * Math.PI * this.timeUnit / this.interval);
        }
        update(){
            this.timeUnit = new Date().getSeconds();
            this.startX = centerX - 0.1 * (this.length) * Math.cos(2 * Math.PI * this.timeUnit / this.interval);
            this.startY = centerY - 0.1 * (this.length) * Math.sin(2 * Math.PI * this.timeUnit / this.interval);
            this.endX =  centerX + 0.8 * (this.length) * Math.cos(2 * Math.PI * this.timeUnit / this.interval);
            this.endY = centerY + 0.8 * (this.length) * Math.sin(2 * Math.PI * this.timeUnit / this.interval);
        }
    }

    const clockFrame = new Circle({
        x: centerX,
        y: centerY,
        radius
    });

    const secondHand = new Hand({
        length: radius,
        timeUnit: new Date().getSeconds(),
        interval: 60,
        lineWidth: 5,
        lineCap: "round",
        strokeStyle: "red"
    });

    const clockCenter = new Circle({
        x: centerX,
        y: centerY,
        radius: radius/20,
        fillStyle: "black"
    });
    
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, width, height);
        clockFrame.draw(c);
        secondHand.draw(c);
        clockCenter.draw(c);
        secondHand.update();
    }

    animate();

    

    // class Line {
    //     constructor(x, y, length){
    //         this.x = x;
    //         this.y = y;
    //         this.length = length;
    //         this.intVar = new Date().getSeconds();
    //         this.endX = this.x + this.length * Math.cos(2 * Math.PI * this.intVar/60);
    //         this.endY =  this.y + this.length * Math.sin(2 * Math.PI * this.intVar/60);
    //     }

    //     draw(){
    //         c.beginPath();
    //         c.moveTo(this.x, this.y);
    //         c.lineTo(this.endX, this.endY);
    //         c.stroke();
    //     }
    //     update() {
    //         this.intVar = new Date().getSeconds();
    //         this.endX = this.x + this.length * Math.cos(2 * Math.PI * this.intVar/60);
    //         this.endY = this.y + this.length * Math.sin(2 * Math.PI * this.intVar/60);
    //     }
    // }

    // let secondHand = new Line(width/2, height/2, 4/5 * radius);
        
    
    // secondHand.draw();

    // setInterval(() => {
    //     c.clearRect(0, 0, width, height);
    //     clockFrame.draw(c);

    //     secondHand.draw();
    //     secondHand.update();
    // }, 1000);
   
}

export default canvas1;
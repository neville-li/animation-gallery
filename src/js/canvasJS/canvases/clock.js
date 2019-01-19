import {Circle, Line} from "../shapes";

const clock = (canvas) => {
   
    canvas.style.background = "#d2ddd8";
    const {width, height} = canvas;
    const c = canvas.getContext("2d");
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width > height ? height * 2/5 : width * 2/5;

    class Hand extends Line {
        constructor(props){
            super(props);
            this.type = props.type;
            this.interval = props.interval;
            this.length = props.length;
            this.startX = centerX - 0.1 * this.length * Math.cos(2 * Math.PI * this.timeUnit / this.interval);
            this.startY = centerY - 0.1 * this.length * Math.sin(2 * Math.PI * this.timeUnit / this.interval);
            this.endX =  centerX + 0.8 * this.length * Math.cos(2 * Math.PI * this.timeUnit / this.interval);
            this.endY = centerY + 0.8 * this.length * Math.sin(2 * Math.PI * this.timeUnit / this.interval);
        }
        update(){
            const timeUnit = {
                secondHand: new Date().getSeconds(),
                minuteHand: new Date().getMinutes(),
                hourHand: (new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours())
                    + new Date().getMinutes() / 60
            }[this.type];

            this.startX = centerX - 0.1 * (this.length) * Math.cos((2 * Math.PI * timeUnit / this.interval) - 0.5 * Math.PI);
            this.startY = centerY - 0.1 * (this.length) * Math.sin((2 * Math.PI * timeUnit / this.interval) - 0.5 * Math.PI);
            this.endX =  centerX + 0.8 * (this.length) * Math.cos((2 * Math.PI * timeUnit / this.interval) - 0.5 * Math.PI);
            this.endY = centerY + 0.8 * (this.length) * Math.sin((2 * Math.PI * timeUnit / this.interval) - 0.5 * Math.PI);
        }
    }

    const clockFrame = new Circle({
        x: centerX,
        y: centerY,
        radius,
        strokeStyle: "#3A425C",
        lineWidth: `${radius / 7}`,
        fillStyle: "white"
    });

    const secondHand = new Hand({
        type: "secondHand",
        length: 1.01 * radius,
        interval: 60,
        lineWidth: 2,
        lineCap: "round",
        strokeStyle: "#c32439"
    });

    const minuteHand = new Hand({
        type: "minuteHand",
        length: 0.9 * radius,
        interval: 60,
        lineWidth: 6,
        lineCap: "round",
        strokeStyle: "#222222"
    });

    const hourHand = new Hand({
        type: "hourHand",
        length: 0.5 * radius,
        interval: 12,
        lineWidth: 8,
        lineCap: "round",
        strokeStyle: "#222222"
    });

    const clockCenter = new Circle({
        x: centerX,
        y: centerY,
        radius: radius/25,
        fillStyle: "#3A425C",
        strokeStyle: "#3A425C"
    });

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, width, height);
        clockFrame.draw(c);
        for (let i = 1; i <= 12; i++){
            c.font = `${radius/7}pt Calibri`;
            c.textAlign = 'center';
            c.textBaseline = "middle";
            c.fillStyle = "#222222";
            c.fillText(i, 
            centerX + 0.77 * radius * Math.cos((2 * Math.PI * i / 12) - 0.5 * Math.PI),
            centerY + 0.77 * radius * Math.sin((2 * Math.PI * i / 12) - 0.5 * Math.PI));
        }  
        secondHand.draw(c);
        minuteHand.draw(c);
        hourHand.draw(c);
        clockCenter.draw(c);
        secondHand.update();
        minuteHand.update();
        hourHand.update();
    }

    animate();
}

export default clock;
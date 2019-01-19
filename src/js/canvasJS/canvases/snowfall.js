import { Circle } from "../shapes";

const snowfall = (canvas) => {

    canvas.style.background = "linear-gradient(to bottom, #131862, #546bab)";
    const { width, height } = canvas;
    const c = canvas.getContext("2d");

    class SnowFlake extends Circle {
        constructor(props) {
            props.x = Math.random() * width,
            props.y = Math.random() * height,
            super(props);
            this.vx = props.vx;
            this.vy = Math.random() * props.vy + 0.5;
        }
        update() {
            this.y += this.vy;
            this.x += this.vx;
            if (this.y - this.radius > height) {
                this.x = Math.random() * width;
                this.y = 0;
            }
            if (this.x - this.radius > width) {
                this.x = 0;
                this.y = Math.random() * height;
            }
        }
    }

     let snowFlakes = [];

    for(let i = 0; i < width/20 ; i++){
        snowFlakes.push(
            new SnowFlake({
                radius: 5,
                fillStyle: "rgba(255, 255, 255, 1)",
                strokeStyle: "rgba(255, 255, 255, 1)",
                vx: 1,
                vy: 3,
            }),
            new SnowFlake({
                radius: 3.5,
                fillStyle: "rgba(255, 255, 255, 0.7)",
                strokeStyle: "rgba(255, 255, 255, 0.7)",
                vx: 0.7,
                vy: 2,
            }),
            new SnowFlake({
                radius: 2,
                fillStyle: "rgba(255, 255, 255, 0.5)",
                strokeStyle: "rgba(255, 255, 255, 0.5)",
                vx: 0.3,
                vy: 1.5,
            })
        );
    }

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        snowFlakes.forEach(snowFlake => {
            snowFlake.draw(c);
        });
        snowFlakes.forEach(snowFlake => {
            snowFlake.update();
        });
    }
    animate();

}


export default snowfall;
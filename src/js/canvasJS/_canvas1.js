import Drawing from "./drawing";

const canvas1 = () => {
    const drawing = new Drawing(document.querySelector(".drawing"));
    const canvas = drawing.createCanvas("white");
    const {width, height} = canvas;
    const c = canvas.getContext("2d");

    let radius = width > height ? height * 2/5 : width * 2 / 5;

    class secondHand{
        constructor(x, y, length){
            this.x = x;
            this.y = y;
            this.length = length;
            this.intVar = 0;
            this.endX = this.x+ length;
            this.endY = y;
        }

        draw(){
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(this.endX, this.endY);
            c.stroke();
        }
        update() {
            this.intVar++;
            this.endX = this.x + this.length * Math.cos(2 * Math.PI * this.intVar/60);
            this.endY = this.y + this.length * Math.sin(2 * Math.PI * this.intVar/60);
        }
    }

    let second = new secondHand(width/2, height/2, 4/5 * radius)

    setInterval(() => {
        c.clearRect(0, 0, width, height);
        c.beginPath();
        c.arc(width/2, height/2, radius, 0, 2 * Math.PI, true);
        c.stroke();

        second.draw();
        second.update();
    }, 1000);
   
}

export default canvas1;
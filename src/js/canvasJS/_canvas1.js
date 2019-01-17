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
        }

        draw(){
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(width/2, height/2 - radius * 9/10);
            c.stroke();
        }
        update() {
            // this.x = -this.x;
            this.y = -this.y;
        }
    }

    let second = new secondHand(width/2, height/2, 4/5 * radius)

    function animate() {
        requestAnimationFrame(animate);
        
    }
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
const canvas0 = (canvas) => {

    canvas.style.background = "linear-gradient(to bottom, #131862, #546bab)";
    const {width, height} = canvas;
    const c = canvas.getContext("2d");

    class Circle {
        constructor(dx, dy, radius, color){
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.dx = dx;
            this.dy = Math.random() * dy + 0.5;
            this.radius = radius;
            this.color = color;
        }
        draw(){
            c.beginPath();
            c.strokeStyle = this.color;
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            c.fillStyle = this.color;
            c.fill();
            c.stroke();
        }
        update(){
            this.y += this.dy;
            this.x += this.dx;
            if(this.y - this.radius > height ){
                this.x = Math.random() * width;
                this.y = 0;
            }
            if(this.x - this.radius > width ){
                this.x = 0;
                this.y = Math.random() * height;
            } 
        }
    }

    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, width, height);
        circles.forEach(circle => {
            circle.update();
        });
        circles.forEach(circle => {
            circle.draw();
        });
    }

    let circles = [];

    for(let i = 0; i < width/20 ; i++){
        circles.push(new Circle(1, 2.5, 4, "rgba(255,255,255,1)"));
        circles.push(new Circle(0.7, 2, 3, "rgba(255,255,255,0.7)"));
        circles.push(new Circle(0.3, 1.5, 2, "rgba(255,255,255,0.5)"));
    }
    
  
    animate();
}


export default canvas0;
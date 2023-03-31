class Circle {
    x;
    y;
    radius;
    color;


    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "#000000";
    }

    render(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
let circle = new Circle(200,300,100);
circle.render(document.getElementById("canvas"));

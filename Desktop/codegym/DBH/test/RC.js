class RC {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height =70;
    }
    drawRC() {
        ctx.drawImage(document.getElementById("RC"), this.x, this.y, this.width, this.height);
    }

}


class Scenario {
    constructor(p5, image, velocity) {
        this.p5 = p5;
        this.image = image;
        this.velocity = velocity;
        this.x1 = 0;
        this.x2 = this.p5.width;
    }

    exibe() {
        this.p5.image(this.image, this.x1 , 0, this.p5.width, this.p5.height);
        this.p5.image(this.image, this.x2 , 0, this.p5.width, this.p5.height);
    }

    move() {
        this.x1 = this.x1 - this.velocity;
        this.x2 = this.x2 - this.velocity;

        if (this.x1 < -this.p5.width) {
            this.x1 = this.p5.width;
        }

        if (this.x2 < -this.p5.width) {
            this.x2 = this.p5.width;
        }
    }
}

export default Scenario;

class Scenario {
    constructor(image, velocity) {
        this.image = image;
        this.velocity = velocity;
        this.x1 = 0;
        this.x2 = width;
    }

    show() {
        image(this.image, this.x2 , 0, width, height);
        image(this.image, this.x1 , 0, width, height);
    }

    move() {
        this.x1 = this.x1 - this.velocity;
        this.x2 = this.x2 - this.velocity;

        if (this.x1 < -width) {
            this.x1 = width;
        }

        if (this.x2 < -width) {
            this.x2 = width;
        }
    }
}

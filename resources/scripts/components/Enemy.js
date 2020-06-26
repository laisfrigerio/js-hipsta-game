import Animation from './Animation';

class Enemy extends Animation {

    constructor(p5, matrix, image, x, width, height, widthSprite, heightSprite) {
        super(p5, matrix, image, x, width, height, widthSprite, heightSprite);
        this.velocity = 10;
    }

    move() {
        this.x -= this.velocity;
        if (this.x < -this.width) {
            this.x = this.p5.width;
        }
    }
}

export default Enemy;

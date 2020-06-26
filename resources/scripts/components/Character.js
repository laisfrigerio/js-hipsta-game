import Animation from './Animation';

class Character extends Animation {

    constructor(p5, matrix, image, x, width, height, widthSprite, heightSprite) {
        super(p5, matrix, image, x, width, height, widthSprite, heightSprite);
        this.yInital = this.p5.height - this.height;
        this.y = this.yInital;
        this.jumpVelocity = 0;
        this.gravity = 3;
    }

    jump () {
        this.jumpVelocity = -30;
    }

    applyGravity () {
        this.y = this.y + this.jumpVelocity;
        this.jumpVelocity = this.jumpVelocity + this.gravity;

        if (this.y > this.yInital) {
            this.y = this.yInital;
        }
    }
}

export default Character;

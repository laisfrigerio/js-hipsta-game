class Enemy extends AnimationDraw {

    constructor(matrix, image, x, yRange, widthEnemy, heightEnemy, widthSprite, heightSprite, velocity, delay) {
        super(matrix, image, x, yRange, widthEnemy, heightEnemy, widthSprite, heightSprite, velocity, delay);
    }

    move() {
        this.x -= this.velocity;
        if (this.x < -this.width - this.delay) {
            this.x = width;
        }
    }
}

class Bubble extends AnimationDraw {

    constructor(matrix, image, x, widthEnemy, heightEnemy, widthSprite, heightSprite) {
        super(matrix, image, x, widthEnemy, heightEnemy, widthSprite, heightSprite);
        this.velocity = 10;
    }

    move() {
        this.x -= this.velocity;
        if (this.x < -this.width) {
            this.x = width;
        }
    }
}

class Witch extends AnimationDraw {

    constructor(matrix, image, x, yRange, widthWitch, heightWitch, widthSprite, heightSprite) {
        super(matrix, image, x, yRange, widthWitch, heightWitch, widthSprite, heightSprite);
        this.yInital = height - this.height - yRange;
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

    checkCollision(enemy) {
        const precision = .65;
        return collideRectRect(
            this.x, 
            this.y, 
            this.width * precision, 
            this.height * precision, 
            enemy.x, 
            enemy.y, 
            enemy.width * precision, 
            enemy.height * precision
        );
    }
}

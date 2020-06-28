class Witch extends AnimationDraw {

    constructor(matrix, image, x, yRange, widthWitch, heightWitch, widthSprite, heightSprite) {
        super(matrix, image, x, yRange, widthWitch, heightWitch, widthSprite, heightSprite);
        this.yInital = height - this.height - yRange;
        this.y = this.yInital;
        this.jumpVelocity = 0;
        this.gravity = 3;
        this.skips = 0;
        this.isInvincible = false;
    }

    jump () {
        if (this.skips < 2) {
            this.jumpVelocity = -35;
            this.skips++;
        }
    }

    makeInvincible() {
        this.isInvincible = true;
        setTimeout(() => { this.isInvincible = false; }, 1000);
    }

    applyGravity () {
        this.y = this.y + this.jumpVelocity;
        this.jumpVelocity = this.jumpVelocity + this.gravity;

        if (this.y > this.yInital) {
            this.y = this.yInital;
            this.skips = 0;
        }
    }

    checkCollision(enemy) {
        if (this.isInvincible) return false;

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

class Enemy extends AnimationDraw {

    constructor(matrix, image, x, yRange, widthEnemy, heightEnemy, widthSprite, heightSprite, velocity) {
        super(matrix, image, x, yRange, widthEnemy, heightEnemy, widthSprite, heightSprite, velocity);
    }

    move() {
        this.x -= this.velocity;
        if (this.x < -this.width) {
            this.x = width;
            enemyShow++;
            if (enemyShow > (enemies.length - 1)) {
                enemyShow = 0;
            }
        }
    }
}

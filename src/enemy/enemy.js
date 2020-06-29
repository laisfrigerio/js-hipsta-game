class Enemy extends AnimationDraw {

    constructor(matrix, image, x, yRange, widthEnemy, heightEnemy, widthSprite, heightSprite, velocity) {
        super(matrix, image, x, yRange, widthEnemy, heightEnemy, widthSprite, heightSprite, velocity);
    }

    move() {
        this.x -= this.velocity;
        if (this.x < -this.width) {
            this.x = width;
            game.index++;

            if (game.index > (game.map.length - 1)) {
                game.index = 0;
            }
        }
    }
}

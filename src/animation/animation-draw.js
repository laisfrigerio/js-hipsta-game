class AnimationDraw {
    constructor(matrix, image, x, yRange, widthElement, heightElement, widthSprite, heightSprite, velocity, delay) {
        this.matrix = matrix;
        this.image = image;
        this.width = widthElement;
        this.height = heightElement;
        this.yRange = yRange;
        this.x = x;
        this.y = height - this.height - yRange;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;
        this.currentPostion = 0;
        this.velocity = velocity;
        this.delay = delay;
    }

    show (play) {
        image(this.image, this.x, this.y, this.width, this.height, this.matrix[this.currentPostion][0], this.matrix[this.currentPostion][1], this.widthSprite, this.heightSprite);
        if (play) {
            this.animate();
        }
    }

    animate() {
        this.currentPostion++;
        if (this.currentPostion >= (this.matrix.length - 1)) {
            this.currentPostion = 0;
        }
    }
}

class AnimationDraw {
    constructor(matrix, image, x, widthElement, heightElement, widthSprite, heightSprite) {
        this.matrix = matrix;
        this.image = image;
        this.width = widthElement;
        this.height = heightElement;
        this.x = x;
        this.y = height - this.height;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;
        this.currentPostion = 0;
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

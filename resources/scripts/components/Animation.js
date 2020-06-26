class Animation {
    constructor(p5, matrix, image, x, width, height, widthSprite, heightSprite) {
        this.p5 = p5;
        this.matrix = matrix;
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = this.p5.height - this.height;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;
        this.currentPostion = 0;
    }

    show (play) {
        this.p5.image(this.image, this.x, this.y, this.width, this.height, this.matrix[this.currentPostion][0], this.matrix[this.currentPostion][1], this.widthSprite, this.heightSprite);
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

export default Animation;

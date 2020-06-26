class Personagem {

    constructor(p5, image, height) {
        this.p5 = p5;
        this.image = image;
        this.height = height;
        this.matrix = [
            [0,0],
            [220,0],
            [440,0],
            [660,0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540],
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810],
        ];
        this.currentPostion = 0;
    }

    exibe () {
        this.p5.image(this.image, 0, this.p5.height - this.height, 110, this.height, this.matrix[this.currentPostion][0], this.matrix[this.currentPostion][1], 220, 270);
        this.anima();
    }

    anima() {
        if (this.currentPostion >= (this.matrix.length - 1)) {
            this.currentPostion = 0;
            return;
        }

        this.currentPostion++;
    }
}

export default Personagem;
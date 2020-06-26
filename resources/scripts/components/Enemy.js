import Animation from './Animation';

class Enemy extends Animation {

    constructor(p5, matrix, image, x, width, height, widthSprite, heightSprite) {
        super(p5, matrix, image, x, width, height, widthSprite, heightSprite);
    }
}

export default Enemy;

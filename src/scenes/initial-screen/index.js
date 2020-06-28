class InitialScreen {
    constructor() {

    }

    draw() {
        this._showBackgroundImage();
    }

    _showBackgroundImage() {
        image(initialScreenImage, 0, 0, width, height);
    }
}
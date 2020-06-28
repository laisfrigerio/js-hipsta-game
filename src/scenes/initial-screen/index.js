class InitialScreen {
    constructor() {
        this.btn = new StartGameButton("Iniciar", width/2, height/2);
    }

    draw() {
        this._showBackgroundImage();
        this._text();
        this._button();
    }

    _showBackgroundImage() {
        image(initialScreenImage, 0, 0, width, height);
    }

    _text() {
        textFont(initialScreenFont);
        textAlign(CENTER);

        textSize(40);
        text("As aventuras de ", (width / 2), height / 3);

        textSize(150);
        text("Hipsta", (width / 2), height / 2);
    }

    _button() {
        this.btn.draw();
    }
}
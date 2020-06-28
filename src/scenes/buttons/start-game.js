class StartGameButton extends Button {
    constructor() {
        super("Iniciar", width/2, height/2);
        this.addClass("start-game");
        this.setY(height / 7 * 5);
    }

    draw() {
        this.element.position(this.x, this.y);
        this.element.mousePressed(() => {
            currentScene = 'game';
            this.element.remove();
            play = true;
        });
    }
}
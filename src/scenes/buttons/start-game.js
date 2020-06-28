class StartGameButton extends Button {
    constructor() {
        super("Iniciar", width/2, height / 7 * 5);
        this.addClass("start-game");
    }

    draw() {
        this.element.position(this.x, this.y);
        this.element.mousePressed(() => {
            game.init();
            playSound();
            currentScene = 'game';
            this.element.remove();
        });
    }
}
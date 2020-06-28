function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(100);
    game = new Game();
    game.init();
}

function keyPressed() {
    game.keyPressed(key);
}

function draw() {
    game.draw();
}
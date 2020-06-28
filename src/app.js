function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(100);
    init();
}

function keyPressed() {
    if (key === 'ArrowUp') {
        witchCharacter.jump();
        jumpAudio.play();
    }
}

function draw() {
    scenario.show();
    witchCharacter.show(play);
    bubbleEnemy.show(play);
    if (play) {
        scenario.move();
        witchCharacter.applyGravity();
        bubbleEnemy.move();
        if (witchCharacter.checkCollision(bubbleEnemy)) {
            pauseSound();
            gameOver();
        }
    }
}

document.querySelector("#play").addEventListener('click', () => {
    playSound();
});

document.querySelector("#pause").addEventListener('click', () => {
    pauseSound();
});

function playSound() {
    gameAudio.loop();
    play = true;
}

function pauseSound() {
    gameAudio.pause();
    play = false;
}
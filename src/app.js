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
    pointing.show();

    enemies.forEach(enemy => {
        enemy.show(play);
    });

    if (play) {
        pointing.add();
        scenario.move();
        witchCharacter.applyGravity();

        enemies.forEach(enemy => {
            enemy.move();
            if (witchCharacter.checkCollision(enemy)) {
                pauseSound();
                gameOver();
            }
        });
    }
}
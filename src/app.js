function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(100);
    scenario = new Scenario(scenarioImage, 3);
    witchCharacter = new Witch(matrixCharacter, characterImage, 0, 110, mainCharacterHeight, 220, 270);
    enemy = new Bubble(matrixEnemy, enemyImage, width - 52, 52, 52, 104, 104);
}

function keyPressed() {
    if (key === 'ArrowUp') {
        witchCharacter.jump();
    }
}

function draw() {
    scenario.show();
    witchCharacter.show(play);
    enemy.show(play);
    if (play) {
        scenario.move();
        witchCharacter.applyGravity();
        enemy.move();

        if (witchCharacter.checkCollision(enemy)) {
            console.log('is colliding')
        }
    }
}

document.querySelector("#play").addEventListener('click', () => {
    gameAudio.loop();
    play = true;
});

document.querySelector("#pause").addEventListener('click', () => {
    gameAudio.pause();
    play = false;
});

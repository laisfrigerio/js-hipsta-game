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
            alert("Game over");
            init();
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

/**
 * Init/Reset game
 */
function init() {
    play = false;
    scenario = new Scenario(scenarioImage, 3);
    witchCharacter = new Witch(witchCharacterMatrix, witchCharacterImage, 0, 110, mainCharacterHeight, 220, 270);
    bubbleEnemy = new Bubble(bubbleEnemyMatrix, bubbleEnemyImage, width - 52, 52, 52, 104, 104);
}
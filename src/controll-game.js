const $pause = document.querySelector("#pause");
const $play = document.querySelector("#play");

$pause.disabled = true;

$play.addEventListener('click', () => {
    playSound();
    $play.disabled = true;
    $pause.disabled = false;
});

$pause.addEventListener('click', () => {
    pauseSound();
    $pause.disabled = true;
    $play.disabled = false;
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
    pointing = new Pointing();
    witchCharacter = new Witch(witchCharacterMatrix, witchCharacterImage, 0, 30, 110, mainCharacterHeight, 220, 270);
    bubbleEnemy = new Bubble(bubbleEnemyMatrix, bubbleEnemyImage, width - 52, 30, 52, 52, 104, 104, 10, 200);
    flyingEnemy = new Bubble(flyingEnemyMatrix, flyingEnemyImage, width + width, 400, 52, 52, 200, 150, 10, 1500);
    troll = new Troll(trollMatrix, trollImage, width + width, 0, 200, 200, 400, 400, 10, 2500);
    enemies = [];
    enemies.push(bubbleEnemy, flyingEnemy, troll);
}
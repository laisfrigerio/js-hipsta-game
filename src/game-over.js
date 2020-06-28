document.querySelector("#close-modal").addEventListener('click', () => {
    document.querySelector("#game-over").classList.remove("show");
    init();
});

function gameOver() {
    document.querySelector("#game-over").classList.add("show");
}

/**
 * Init/Reset game
 */
function init() {
    play = false;
    scenario = new Scenario(scenarioImage, 3);
    witchCharacter = new Witch(witchCharacterMatrix, witchCharacterImage, 0, 30, 110, mainCharacterHeight, 220, 270);
    bubbleEnemy = new Bubble(bubbleEnemyMatrix, bubbleEnemyImage, width - 52, 30, 52, 52, 104, 104, 10, 0);
    troll = new Troll(trollMatrix, trollImage, width + width, 0, 200, 200, 400, 400, 10, width);
}
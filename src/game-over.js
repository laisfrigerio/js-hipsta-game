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
    witchCharacter = new Witch(witchCharacterMatrix, witchCharacterImage, 0, 110, mainCharacterHeight, 220, 270);
    bubbleEnemy = new Bubble(bubbleEnemyMatrix, bubbleEnemyImage, width - 52, 52, 52, 104, 104);
}
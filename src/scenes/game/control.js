const $pause = document.querySelector("#pause");
const $restart = document.querySelector("#restart");
const $start = document.querySelector(".start-game");
const $control = document.querySelector(".control");

$restart.addEventListener('click', () => {
    playSound();
});

$pause.addEventListener('click', () => {
    pauseSound();
});

function enableRestartGame() {
    $pause.disabled = true;
    $restart.disabled = false;
}

function enablePauseGame() {
    $restart.disabled = true;
    $pause.disabled = false;
    $control.classList.add("show");
}

function playSound() {
    gameAudio.loop();
    play = true;
    enablePauseGame();
}

function pauseSound() {
    gameAudio.pause();
    play = false;
    enableRestartGame();
}
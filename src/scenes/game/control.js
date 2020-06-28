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
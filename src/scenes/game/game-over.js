document.querySelector("#close-modal").addEventListener('click', () => {
    document.querySelector("#game-over").classList.remove("show");
    game.init();
});

function gameOver() {
    document.querySelector("#game-over").classList.add("show");
}
function preload() {
    scenarioImage  = loadImage("assets/images/scenario/jungle.png");
    witchCharacterImage = loadImage("assets/images/character/running.png");
    bubbleEnemyImage = loadImage("assets/images/enemies/bubble.png");
    trollImage = loadImage("assets/images/enemies/troll.png");
    flyingEnemyImage = loadImage("assets/images/enemies/flying-bubble.png");
    gameAudio = loadSound("assets/audios/game-track.mp3");
    jumpAudio = loadSound("assets/audios/jumping-sound.mp3");

    initialScreenImage = loadImage("assets/images/scenario/initial-screen.png");
    initialScreenFont = loadFont("assets/fonts/initial-screen.otf");

    healthImage = loadImage("assets/images/health/heart.png");
    configFile = loadJSON("assets/config.json");
}

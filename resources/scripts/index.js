import * as p5 from "p5";
import "p5.collide2d";
import "p5/lib/addons/p5.sound";

import Character from './components/Character';
import Enemy from "./components/Enemy";
import Scenario from './components/Scenario';

let scenarioImage;
let characterImage;
let enemyImage;
let gameAudio;

let scenario;
let character;
let enemy;

const matrixEnemy = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
];
let matrixCharacter = [
    [0,0],
    [220,0],
    [440,0],
    [660,0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
];

let mainCharacterHeight = 135;
let play = false;

const sketch = (p) => {
    p.preload = () => {
        scenarioImage = p.loadImage("images/scenario/jungle.png");
        characterImage = p.loadImage("images/character/running.png");
        enemyImage = p.loadImage("images/enemies/droplet.png");
        gameAudio = p.loadSound("audios/game-track.mp3");
    }

    p.setup = () => {
        p.createCanvas(p.windowWidth - 100, p.windowHeight - 200);
        p.frameRate(100);
        scenario = new Scenario(p, scenarioImage, 3);
        character = new Character(p,matrixCharacter, characterImage, 0, 110, mainCharacterHeight, 220, 270);
        enemy = new Enemy(p, matrixEnemy, enemyImage, p.width - 52, 52, 52, 104, 104);
    }

    p.keyPressed = () => {
        if (p.key === 'ArrowUp') {
            character.jump();
        }
    }

    p.draw = () => {
        scenario.show();
        character.show(play);
        enemy.show(play);
        if (play) {
            scenario.move();
            character.applyGravity();
            enemy.move();

            if (character.checkCollision(enemy)) {
                console.log('is colliding')
            }
        }
    }
}

new p5(sketch);

document.querySelector("#play").addEventListener('click', () => {
    gameAudio.loop();
    play = true;
});

document.querySelector("#pause").addEventListener('click', () => {
    gameAudio.pause();
    play = false;
});

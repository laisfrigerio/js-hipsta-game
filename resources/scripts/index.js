import * as p5 from "p5";
import "p5/lib/addons/p5.sound";

import Scenario from './components/Scenario';
import Character from './components/Character';

let scenarioImage;
let characterImage;
let gameAudio;
let mainCharacterHeight = 135;
let scenario;
let character;
let play = false

const sketch = (p) => {
    p.preload = () => {
        scenarioImage = p.loadImage("images/scenario/jungle.png");
        characterImage = p.loadImage("images/character/running.png");
        gameAudio = p.loadSound("audios/game-track.mp3");
    }

    p.setup = () => {
        p.createCanvas(p.windowWidth - 100, p.windowHeight - 200);
        p.frameRate(40);
        scenario = new Scenario(p, scenarioImage, 3);
        character = new Character(p, characterImage, mainCharacterHeight);
    }

    p.draw = () => {
        scenario.exibe();
        if (play) {
            scenario.move();
            character.exibe();
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

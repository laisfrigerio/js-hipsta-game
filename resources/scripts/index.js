import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import Cenario from './components/Cenario';
import Personagem from './components/Personagem';

let imagemCenario;
let imagemPersonagem;
let gameAudio;
let hipstaHeight = 135;
let cenario;
let personagem;
let play = false

const sketch = (p) => {
    p.preload = () => {
        imagemCenario = p.loadImage("images/cenario/floresta.png");
        imagemPersonagem = p.loadImage("images/personagem/correndo.png");
        gameAudio = p.loadSound("audios/trilha_jogo.mp3");
    }

    p.setup = () => {
        p.createCanvas(p.windowWidth - 100, p.windowHeight - 200);
        p.frameRate(40);
        cenario = new Cenario(p, imagemCenario, 3);
        personagem = new Personagem(p, imagemPersonagem, hipstaHeight);
    }

    p.draw = () => {
        cenario.exibe();
        if (play) {
            cenario.move();
            personagem.exibe();
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

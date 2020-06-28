class Game {
    constructor() { 
        this.health = null;
    }

    draw () {
        enemy = enemies[enemyShow];
        scenario.show();
        witchCharacter.show(play);
        pointing.show();
        enemy.show(play);
        this.health.draw();

        if (play) {
            pointing.add();
            scenario.move();
            witchCharacter.applyGravity();

            enemy.move();
            if (witchCharacter.checkCollision(enemy)) {
                this.health.decrement();
                witchCharacter.makeInvincible();

                if (this.health.total === 0) {
                    pauseSound();
                    gameOver();
                }
            }
        }
    }

    /**
     * Init/Reset game
     */
    init() {
        play = false;
        enemyShow = 0;
        scenario = new Scenario(scenarioImage, 3);
        pointing = new Pointing();
        this.health = new Health(3, 100);
        witchCharacter = new Witch(witchCharacterMatrix, witchCharacterImage, 0, 30, 110, mainCharacterHeight, 220, 270);
        bubbleEnemy = new Bubble(bubbleEnemyMatrix, bubbleEnemyImage, width - 52, 30, 52, 52, 104, 104, 10, 200);
        flyingEnemy = new Bubble(flyingEnemyMatrix, flyingEnemyImage, width, 100, 52, 52, 200, 150, 10, 400);
        troll = new Troll(trollMatrix, trollImage, width, 0, 200, 200, 400, 400, 10, 500);
        enemies = [];
        enemies.push(bubbleEnemy, flyingEnemy, troll);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            witchCharacter.jump();
            jumpAudio.play();
        }
    }
}
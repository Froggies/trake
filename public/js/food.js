/**
 * Created by manland on 21/03/15.
 */

import ENTITIES from './entityCst';

export class Food {
    constructor(game) {
        this.type = ENTITIES.FOOD;

        this.dx = 10;
        this.dy = 10;
        this.dr = 5;
        this.game = game;

        this.move();

        this.r = this.dr;
        this.width = this.height = this.dr;
    }

    checkCollision() {
        return false;
    }

    move() {
        var wcells = this.game.width/this.dx;
        var hcells = this.game.height/this.dy;

        var randomx = Math.floor(Math.random()*wcells);
        var randomy = Math.floor(Math.random()*hcells);

        this.x = randomx * this.dx;
        this.y = randomy * this.dy;
    }
}
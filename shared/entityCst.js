/**
 * Created by manland on 21/03/15.
 */
module.exports.ENTITIES = {
    GAME_BOARD: 'gameBoard',
    SNAKE: 'snake',
    FOOD: 'food'
};

module.exports.CONFIG = {
    GAME_BOARD: {
        width: 400,
        height: 400
    },
    SNAKE: {
        dx: 10,
        dy: 10
    },
    FOOD: {
        dx: 10,
        dy: 10,
        radius: 5
    }
};

module.exports.IA = {
    color: '#FF0000',
    pseudo: 'I@'
};
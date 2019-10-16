const { createMatrix } = require('./matrix');

const sentence = 'This sentence totally arranges';
let board;

const createScrabbleBoard = (size) => {
    return createMatrix(size, ' ');
};

const getWords = (sentence) => {
    return words = sentence.split(' ');
};

const placeWords = (board, word) => {
    let vertical = false;
    let x = 7, y = 7;
    try {
        for (char of word) {
            board[y][x] = char;
            !vertical ? x = x + 1 : y = y + 1;
        }
        return board;
    } catch (e) {
        throw e;
    }
};

console.log(placeWords(createScrabbleBoard(15), 'This', 7, 7));
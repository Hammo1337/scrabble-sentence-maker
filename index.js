const { createMatrix } = require('./matrix');

const sentence = 'This sentence totally arranges';
let board, lastX = 7, lastY = 7, vertical = false;

const createScrabbleBoard = (size) => {
    return createMatrix(size, ' ');
};

const getWords = (sentence) => {
    return words = sentence.split(' ');
};

const searchBackHorizontal = (newChar) => {
    for (let x = lastX; x > 0; x--) {
        if (board[y][x] === newChar) {
            return x;
        } else {
            console.log('This is not a possible scrabble sentence');
        }
    }
};

const searchBackVertical = (newChar) => {
    for (let y = lastY; y > 0; y--) {
        if (board[y][x] === newChar) {
            return y;
        } else {
            console.log('This is not a possible scrabble sentence');
        }
    }
};

const placeWords = (words) => {
    vertical = false;
    for (key in words) {
        if (key == 0) {
            x = lastX, y = lastY;
            placeWord(words[key], x, y);
            vertical = true;
            console.log(board);
        } else {
            if (vertical) {
                for(char of words[key]) {
                    let position = searchBackHorizontal(char);
                    console.log(position, words[key], lastY);
                    placeWord(words[key], position, lastY);
                    break;
                }
            }
        }
    }
};

const placeWord = (word, x, y) => {
    console.log(word);
    try {
        for (char of word) {
            board[y][x] = char;
            !vertical ? lastX = x : lastY = y;
            !vertical ? x = x + 1 : y = y + 1;
        }
    } catch (e) {
        throw e;
    }
}

board = createScrabbleBoard(15);

placeWords(getWords('This sucks'));

console.log(board);
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
    let y = lastY;
    for (let x = lastX; x > 0; x--) {
        if (board[y][x] === newChar) {
            return x;
        }
    }
};

const searchBackVertical = (newChar) => {
    let x = lastX;
    for (let y = lastY; y > 0; y--) {
        console.log(board[y][x], newChar);
        if (board[y][x] === newChar) {
            return y;
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
                    console.log(board);
                    vertical = false;
                    break;
                }
            } else {
                for(char of words[key]) {
                    let position = searchBackVertical(char);
                    console.log(lastX, words[key], position);
                    placeWord(words[key], lastX, position);
                    vertical = true;
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

placeWords(getWords('This isnt'));

console.log(board);
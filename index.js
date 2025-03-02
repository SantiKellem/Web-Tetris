// Initalize canvas and its dimensions
const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = 300;
canvas.height = canvas.width * 2;
canvasContext.scale(20, 20);
canvasContext.fillStyle = "red";

let board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

const divBoard = document.getElementById("board");
//console.log(board);

// Create tetris pieces
const SQUARE = [[1, 1],
                [1, 1]];

const LINE = [[1],
              [1],
              [1],
              [1]];

const EL_LEFT = [[0, 1],
                 [0, 1],
                 [1, 1]];

const EL_RIGHT = [[1, 0],
                  [1, 0],
                  [1, 1]];

const STEP = [[1, 1, 1],
              [0, 1, 0]];

const Z_RIGHT = [[0, 1, 1],
                 [1, 1, 0]];

const Z_LEFT = [[1, 1, 0],
                [0, 1, 1]];

const PIECES = [SQUARE, LINE, EL_LEFT, EL_RIGHT, STEP, Z_RIGHT, Z_LEFT];



// Game Loop
const FPS = 60;
const FRAME_TIME = 1000 / FPS;

function update() {
    setInterval(update, FRAME_TIME);
    draw();

}

function draw() {
    canvasContext.fillStyle = "#000";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

update();

function startGame() {
    drawPiece();
}

function drawPiece() {
    let randomPiece = Math.floor(Math.random() * 7);
    let newPiece = document.createElement("canvas");
    divBoard.append(newPiece);

    let pieceContext = newPiece.getContext('2d');

    newPiece.width = PIECES[randomPiece][0].length * 20;
    newPiece.height = PIECES[randomPiece].length * 20;
    pieceContext.scale(20, 20);

    pieceContext.fillStyle = "#f00";

    for (let y = 0; y <= newPiece.height; y++) {
        PIECES[randomPiece][y].forEach((el, index) => {
            if (el === 1) {
                pieceContext.fillRect(index, y, 1, 1);
            }
        });
    }
}
// Initalize canvas and its dimensions
const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

const BLOCK_SIZE = 20;
canvas.width = 15 * BLOCK_SIZE;
canvas.height = canvas.width * 2;
canvasContext.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]];

const divBoard = document.getElementById("board");
//console.log(board);

// Create tetris pieces
const SQUARE = {
    position: {x: 0, y: 0},
    shape: [[1, 1],
            [1, 1]]}

const LINE = {
    position: {x: 10, y: 10},
    shape: [[1],
            [1],
            [1],
            [1]]}

const EL_LEFT = {
    position: {x: 10, y: 10},
    shape: [[0, 1],
            [0, 1],
            [1, 1]]}

const EL_RIGHT = {
    position: {x: 10, y: 10},
    shape: [[1, 0],
            [1, 0],
            [1, 1]]}

const STEP = {
    position: {x: 10, y: 10},
    shape: [[1, 1, 1],
            [0, 1, 0]]}

const Z_RIGHT = {
    position: {x: 10, y: 10},
    shape: [[0, 1, 1],
            [1, 1, 0]]}

const Z_LEFT = {
    position: {x: 10, y: 10},
    shape: [[1, 1, 0],
            [0, 1, 1]]}

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

    board.forEach((arr, y) => 
        arr.forEach((el, x) => {
            if (el === 1) {
                canvasContext.fillStyle = "yellow";
                canvasContext.fillRect(x, y, 1, 1);
            }
        })
    );

    for (let y = 0; y <= PIECES[6].shape.length - 1; y++) {
        PIECES[6].shape[y].forEach((el, x) => {
            if (el === 1) {
                canvasContext.fillStyle = "#4854fd";
                canvasContext.fillRect(x + PIECES[6].position.x, y + PIECES[6].position.y, 1, 1);
            }
        });
    }
}

// Piece movement
document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") PIECES[6].position.x++;
    if (event.key === "ArrowLeft") PIECES[6].position.x--;
    if (event.key === "ArrowDown") PIECES[6].position.y++;
    if (event.key === "ArrowUp") PIECES[6].position.y--;
    colisionDetect();
    
});

// Detect colisions
function colisionDetect() {
    if (PIECES[6].position.x > (canvas.width / BLOCK_SIZE) - PIECES[6].shape[0].length) PIECES[6].position.x--;
    if (PIECES[6].position.x < 0) PIECES[6].position.x++;
    if (PIECES[6].position.y > (canvas.height / BLOCK_SIZE) - PIECES[6].shape.length) {
        PIECES[6].position.y--;
        //fixPiece();
    }

    /*let col = false;
    let row = board[PIECES[6].position.y + 1];

    PIECES[6].shape[PIECES[6].shape.length - 1].forEach((el, x) => {
        if (row[PIECES[6].position.x + x] === el) {
            col = true;
        }
    });
    if (col) {
        PIECES[6].position.y--;
        //fixPiece();
    }*/

    if (board[PIECES[6].position.y + 1][PIECES[6].position.x] === 1) {
        PIECES[6].position.y--;
        //fixPiece();
    }
}

function fixPiece() {

}

console.log(PIECES[0].position.y);
console.log();

update();

function startGame() {
    drawPiece();
}

function drawPiece() {
    let randomPiece = Math.floor(Math.random() * 7);
    let newPiece = document.createElement("canvas");
    divBoard.append(newPiece);

    let pieceContext = newPiece.getContext('2d');

    newPiece.width = PIECES[randomPiece].shape[0].length * BLOCK_SIZE;
    newPiece.height = PIECES[randomPiece].shape.length * BLOCK_SIZE;
    pieceContext.scale(BLOCK_SIZE, BLOCK_SIZE);

    pieceContext.fillStyle = "#00f";

    for (let y = 0; y <= PIECES[randomPiece].shape.length - 1; y++) {
        PIECES[randomPiece].shape[y].forEach((el, x) => {
            if (el === 1) {
                pieceContext.fillRect(x, y, 1, 1);
            }
        });
    }
}
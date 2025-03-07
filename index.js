// Initalize canvas and its dimensions
const canvas = document.querySelector('canvas');
canvas.style.display = "none";

const canvasContext = canvas.getContext('2d');

const BLOCK_SIZE = 20;
canvas.width = 16 * BLOCK_SIZE;
canvas.height = canvas.width * 2;
canvasContext.scale(BLOCK_SIZE, BLOCK_SIZE);

// Declare board
let board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

// Declare all const HTML elements
const divBoard = document.getElementById("board");
const gameOverMsg = document.getElementById("gameOverMsg");
const showScore = document.getElementById("score");
const scoreText = document.getElementById("scoreText");
const startButton = document.getElementById("startButton");


// Create tetris pieces
const SQUARE = {
    position: {x: 7, y: 0},
    shape: [[1, 1],
            [1, 1]]}

const LINE = {
    position: {x: 6, y: 0},
    shape: [[1],
            [1],
            [1],
            [1]]}

const EL_LEFT = {
    position: {x: 6, y: 0},
    shape: [[0, 1],
            [0, 1],
            [1, 1]]}

const EL_RIGHT = {
    position: {x: 6, y: 0},
    shape: [[1, 0],
            [1, 0],
            [1, 1]]}

const STEP = {
    position: {x: 6, y: 0},
    shape: [[1, 1, 1],
            [0, 1, 0]]}

const Z_RIGHT = {
    position: {x: 6, y: 0},
    shape: [[0, 1, 1],
            [1, 1, 0]]}

const Z_LEFT = {
    position: {x: 6, y: 0},
    shape: [[1, 1, 0],
            [0, 1, 1]]}

const PIECES = [SQUARE, LINE, EL_LEFT, EL_RIGHT, STEP, Z_RIGHT, Z_LEFT];



// Game Loop
const FPS = 60;
const FRAME_TIME = 1000 / FPS;

function update() {
    setTimeout(update, FRAME_TIME);
    draw();

}

// Draw function
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

    for (let y = 0; y <= piece.shape.length - 1; y++) {
        piece.shape[y].forEach((el, x) => {
            if (el === 1) {
                canvasContext.fillStyle = "#4854fd";
                canvasContext.fillRect(x + piece.position.x, y + piece.position.y, 1, 1);
            }
        });
    }
}

// Piece movement
document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        event.preventDefault();
        piece.position.x++;
    }
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        piece.position.x--;
    }
    if (event.key === "ArrowDown") {
        event.preventDefault();
        piece.position.y++;
    }
    if (event.key === "ArrowUp") {
        event.preventDefault();
        piece.position.y--;
    }
    colisionDetect();
    
});

// Collision Detector
function colisionDetect() {
    if (piece.position.x > (canvas.width / BLOCK_SIZE) - piece.shape[0].length) piece.position.x--;
    if (piece.position.x < 0) piece.position.x++;
    if (piece.position.y > (canvas.height / BLOCK_SIZE) - piece.shape.length) {
        piece.position.y--;
        fixPiece();
    }

    let col = false;
    let row = board[piece.position.y + piece.shape.length - 1];

    piece.shape[piece.shape.length - 1].forEach((el, x) => {
        if (row[piece.position.x + x] === 1 && el === 1) {
            col = true;
        }
    });
    if (col) {
        piece.position.y--;
        fixPiece();
    }

    /*if (board[piece.position.y + piece.shape.length - 1][piece.position.x] === 1) {
        piece.position.y--;
        //fixPiece();
    }*/
}

function fixPiece() {
    piece.shape.forEach((row, y)=> 
        row.forEach((el, x) => {
            if (el === 1) {
                board[piece.position.y + y][piece.position.x + x] = 1;
            }
        })
    );
    destroyRow();
    if (gameOver()) {
        gameOverMsg.style.display = "flex";
        startButton.style.display = "block";
    }
    else {
        piece = createNewPiece();
    }
}

function createNewPiece() {
    let randomPiece = Math.floor(Math.random() * 7);
    let piece = Object.create(PIECES[randomPiece]);
    piece.position.y = 0;
    piece.position.x = 7;

    return piece;
}

function destroyRow() {
    board.forEach((row, y) => {
        let aux = row.filter(el => el === 0);
        if (aux.length === 0) {
            board.splice(y, 1);
            board.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            score += 100;
            scoreText.textContent = `Score: ${score}`;
        }
    });
}

function gameOver() {
    let firstRow = board[0].filter(el => el === 1);
    return firstRow.length > 0;
}

function cleanBoard() {
    for (let y = 0; y <= board.length - 1; y++) {
        for (let x = 0; x <= board[y].length - 1; x++) {
            board[y][x] = 0;
        }
    }
}

let piece;
let score;

function startGame() {
    canvas.style.display = "block";
    cleanBoard();
    startButton.style.display = "none"
    gameOverMsg.style.display = "none";
    
    score = 0;
    scoreText.textContent = `Score: ${score}`;
    piece = createNewPiece();
    update();
}


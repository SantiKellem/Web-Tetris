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
    position: {x: 0, y: 0},
    shape: [[1, 1],
            [1, 1]]}

const LINE = {
    position: {x: 0, y: 0},
    shape: [[1],
            [1],
            [1],
            [1]]}

const EL_LEFT = {
    position: {x: 0, y: 0},
    shape: [[0, 1],
            [0, 1],
            [1, 1]]}

const EL_RIGHT = {
    position: {x: 0, y: 0},
    shape: [[1, 0],
            [1, 0],
            [1, 1]]}

const STEP = {
    position: {x: 0, y: 0},
    shape: [[1, 1, 1],
            [0, 1, 0]]}

const Z_RIGHT = {
    position: {x: 0, y: 0},
    shape: [[0, 1, 1],
            [1, 1, 0]]}

const Z_LEFT = {
    position: {x: 0, y: 0},
    shape: [[1, 1, 0],
            [0, 1, 1]]}

const PIECES = [SQUARE, LINE, EL_LEFT, EL_RIGHT, STEP, Z_RIGHT, Z_LEFT];


let intervalDrops;
let lastDrop;
let level;
let lastIntervalChangeLevel;

// Game Loop
function update() {
    if (intervalDrops > 500 && level > lastIntervalChangeLevel + 9) {
            intervalDrops -= 100;
            lastIntervalChangeLevel = level;
            console.log(intervalDrops);
            console.log(level);
    }

    let currentTime = performance.now();
    if (currentTime - lastDrop > intervalDrops) {
        lastDrop = currentTime;
        piece.position.y++;
        collisionDetect("ArrowDown");
    }
    draw();
    requestAnimationFrame(update);
}

// Draw function
function draw() {
    canvasContext.fillStyle = "#000";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    board.forEach((row, y) => 
        row.forEach((el, x) => {
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
    event.preventDefault();
    switch (event.key) {
        case "ArrowRight":
            piece.position.x++;
            collisionDetect(event.key);
            break;
        case "ArrowLeft":
            piece.position.x--;
            collisionDetect(event.key);
            break;
        case "ArrowDown":
            piece.position.y++;
            collisionDetect(event.key);
            break;
        case "ArrowUp":
            rotatePiece();
            collisionDetect(event.key);
            break;
        default:
            break;
    }    
});

// Piece Clockwise Rotation
function rotatePiece() {
    let newShape = [];

    // number of columns of newShape = number of rows of piece.shape
    for (let x = 0; x <= piece.shape[0].length - 1; x++) {
        newShape[x] = [];
    }

    // Transpose matrix
    for (let y = 0; y <= piece.shape.length - 1; y++) {
        for (let x = 0; x <= piece.shape[y].length - 1; x++) {
            newShape[x][y] = piece.shape[y][x];
        }
    }
    
    // Reverse each row 
    for (let i = 0; i < newShape.length; i++) {
        newShape[i].reverse();
    }

    let oldShape = piece.shape;
    piece.shape = newShape;
    if (collisionDetect()) {
        piece.shape = oldShape;
    }
}

// Collision Detector
function collisionDetect(arrowPressed) {
    let col;

    if (piece.position.x > (canvas.width / BLOCK_SIZE) - piece.shape[0].length) {
        piece.position.x--; 
        col = true;
        return col;
    }
    if (piece.position.x < 0) {
        piece.position.x++;
        col = true;
        return col;
    }
    if (piece.position.y > (canvas.height / BLOCK_SIZE) - piece.shape.length) {
        piece.position.y--;
        col = true
        fixPiece();
        return col;
    }
    
    col = false;

    for (let y = 0; y <= piece.shape.length - 1; y++) {
        for (let x = 0; x <= piece.shape[y].length - 1; x++) {
            if (piece.shape[y][x] === 1 && board[piece.position.y + y]?.[piece.position.x + x] === 1) {
                col = true;
            }
        }
    }

    if (col) {
        if (arrowPressed === "ArrowRight") piece.position.x--;
        else if (arrowPressed === "ArrowLeft") piece.position.x++;
        else if (arrowPressed === "ArrowDown") {
        piece.position.y--;
        fixPiece();
    }
    }

    return col;
}


// Stick each piece on the board
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
        level++;
        piece = createNewPiece();
    }
}


// Create a new piece for the player
function createNewPiece() {
    let randomPiece = Math.floor(Math.random() * PIECES.length);
    let piece = Object.create(PIECES[randomPiece]);
    piece.position.y = 0;
    piece.position.x = 7;

    return piece;
}


// Destroy rows once they are filled
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


// Checks if the player has lost
function gameOver() {
    let firstRow = board[0].filter(el => el === 1);
    return firstRow.length > 0;
}


// Clears the board to start the game
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

    intervalDrops = 1000;
    lastDrop = 0;
    level = 0;
    lastIntervalChangeLevel = 0;
    
    score = 0;
    scoreText.textContent = `Score: ${score}`;
    piece = createNewPiece();
    requestAnimationFrame(update);
}


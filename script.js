// DOM ELEMENTS

const squareOne = document.getElementById("grid__square-1");
const squareTwo = document.getElementById("grid__square-2");
const squareThree = document.getElementById("grid__square-3");
const squareFour = document.getElementById("grid__square-4");
const squareFive = document.getElementById("grid__square-5");
const squareSix = document.getElementById("grid__square-6");
const squareSeven = document.getElementById("grid__square-7");
const squareEight = document.getElementById("grid__square-8");
const squareNine = document.getElementById("grid__square-9");
const allSquares = document.querySelectorAll(".grid__square");

const playerOneScore = document.getElementById("info__player__score1");
const playerTwoScore = document.getElementById("info__player__score2");

const infoText = document.getElementById("instructions__text");
const startGameBtn = document.getElementById("instructions__btn");

const modal = document.getElementById("modal");

// VARIABLES

const players = {
    playerOne: { name: "Jack", wins: 0 },
    playerTwo: { name: "Jill", wins: 0 },
};

let move = 1;
let nextPlayer = players.playerOne.name;
let pastPlayer;
let currentImage = "cross";
let playerHasWon = false;

// SQUARE CLICKING

function addSquareClick () {
    allSquares.forEach((square) => {
        square.addEventListener("click", squareClick);
    });
}

function removeSquareClick () {
    allSquares.forEach((square) => {
        square.removeEventListener("click", squareClick);
    });
}

function squareClick() {
    if (!this.classList.contains("cross") && !this.classList.contains("circle")) {
    this.classList.add(`${currentImage}`);
    incrementMove();
    };
}

addSquareClick();

// INCREMENT MOVE

function incrementMove() {
    move += 1;
    if (move % 2 !== 0) {
        nextPlayer = players.playerOne.name;
        pastPlayer = players.playerTwo.name;
        currentImage = "cross";
        infoText.innerHTML = `${players.playerOne.name}'s turn`;
    } else {
        nextPlayer = players.playerTwo.name;
        pastPlayer = players.playerOne.name;
        currentImage = "circle";
        infoText.innerHTML = `${players.playerTwo.name}'s turn`;
    };
}

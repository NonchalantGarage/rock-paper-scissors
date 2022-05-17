var messageEl = document.querySelector("#message");
var playerChoiceEl = document.querySelector("#player-choice");
var enemyChoiceEl = document.querySelector("#enemy-choice");
var bestOf3 = document.querySelector("#best-of-3");
var rockSelectEl = document.querySelector("#rock");
var paperSelectEl = document.querySelector("#paper");
var scissorsSelectEl = document.querySelector("#scissors");
var enemyImgChoice = document.createElement("img");
var nextRound = document.querySelector("#next-round");

var messages = {
  default: "Settle the score with classic roshambo",
  choose: "Choose your weapon",
  draw: "It's a draw. Try again",
  rockWins: "Rock busts scissors, you won this round!",
  paperWins: "Paper consumes rock, you won this round!",
  scissorsWin: "Scissors cut paper, you won this round!",
  enemyRockWins: "Rock busts scissors, you lost this round!",
  enemyPaperWins: "Paper consumes rock, you lost this round!",
  enemyScissorsWin: "Scissors cut paper, you lost this round!",
};

let currentRoundData = 0;

function theRound() {
  return currentRoundData;
}

function roundUp() {
  currentRoundData++;
}

// User clicks start game

// Your choice vs enemy choice
// message: you won or lost this round
// display current score at the bottom
// Your choice vs enemy choice
// message: you won or lost this round
// display current score at the bottom
// Game Over enter your initials for winner
// display button to play again

// Start game
// every enemy Arr is populated
// Each player selection push string selection to player ARR
// currentRound = 0
// IF playerSelection[currentRound] = enemySelection[currentRound], then draw
// ELSE switch if playerSelection[currentRound] = rock && enemySelection[currentRound] = scissors

// Define states

// DOM ELEMENTS

// Opening message to init game
var currentMessage = document.createElement("span");
currentMessage.innerHTML = messages.default;
messageEl.appendChild(currentMessage);

var startBtn = document.createElement("button");
startBtn.innerHTML = "Best 2 of 3";
startBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
bestOf3.appendChild(startBtn);

// Enemy OBJ choices
var enemy = {
  choices: ["rock", "paper", "scissors"],
  Bestof3Arr: [],
  enemyArr: [],
};

var player = {
  playerArr: [],
};

// Get random input from enemy & Push random input from enemy

const enemyShuffle = () => {
  let index =  Math.floor(Math.random() * enemy.choices.length);
  return enemy.choices[index]
};

console.log(enemyShuffle());

// for (i = 0; i < 3; i++) {
//   enemy.enemyArr.push(
//     enemy.choices[Math.floor(Math.random() * enemy.choices.length)]
//   );
// }
console.log(player.playerArr);
console.log(enemy.enemyArr);

var rock = document.createElement("img");
rock.setAttribute("src", "./assets/images/rock.png");
rock.setAttribute("id", "rock");

var paper = document.createElement("img");
paper.setAttribute("src", "./assets/images/paper.png");

var scissors = document.createElement("img");
scissors.setAttribute("src", "./assets/images/scissors.png");

// Click choices hanlders

var pickRock = function () {
  playerChoiceEl.appendChild(rock);
  rockSelectEl.innerHTML = "";
  paperSelectEl.innerHTML = "";
  scissorsSelectEl.innerHTML = "";

  enemyChoiceEl.appendChild(enemyImgChoice);
  player.playerArr.push("rock");
  evaluate();
};
var pickPaper = function () {
  playerChoiceEl.appendChild(paper);
  rockSelectEl.innerHTML = "";
  paperSelectEl.innerHTML = "";
  scissorsSelectEl.innerHTML = "";

  enemyChoiceEl.appendChild(enemyImgChoice);
  player.playerArr.push("paper");
  evaluate();
};
var pickScissors = function () {
  playerChoiceEl.appendChild(scissors);
  rockSelectEl.innerHTML = "";
  paperSelectEl.innerHTML = "";
  scissorsSelectEl.innerHTML = "";

  enemyChoiceEl.appendChild(enemyImgChoice);
  player.playerArr.push("scissors");
  evaluate();
};

// GAME LOGIC
var startGame = (event) => {
  bestOf3.innerHTML = "";

  enemyChoiceEl.innerHTML = "";

  nextRound.innerHTML = "";
  currentMessage.innerHTML = messages.choose;

  // var rock = document.createElement('img');
  // rock.setAttribute('src', './assets/images/rock.png');
  rockSelectEl.appendChild(rock);
  rock.addEventListener("click", pickRock);

  // var paper = document.createElement('img');
  // paper.setAttribute('src', './assets/images/paper.png');
  paperSelectEl.appendChild(paper);
  paper.addEventListener("click", pickPaper);

  // var scissors = document.createElement('img');
  // scissors.setAttribute('src', './assets/images/scissors.png');
  scissorsSelectEl.appendChild(scissors);
  scissors.addEventListener("click", pickScissors);
};

// Evalute the round result

const evaluate = function () {
  const playerVs = player.playerArr[currentRoundData];
  const enemyVs = enemyShuffle();
  console.log(currentRoundData);
  // Display enemy choice
  var enemyImg = "./assets/images/" + enemyVs + ".png";
  enemyImgChoice.setAttribute("src", enemyImg);

  if (playerVs === enemyVs) {
    currentMessage.innerHTML = messages.draw;
    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next Round";
    nextBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
    nextRound.appendChild(nextBtn);
    nextBtn.addEventListener("click", startGame);

    // Player win options
  } else if (playerVs === "rock" && enemyVs === "scissors") {
    currentMessage.innerHTML = messages.rockWins;
    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next Round";
    nextBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
    nextRound.appendChild(nextBtn);
  } else if (playerVs === "paper" && enemyVs === "rock") {
    currentMessage.innerHTML = messages.paperWins;
    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next Round";
    nextBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
    nextRound.appendChild(nextBtn);
    nextBtn.addEventListener("click", startGame);
  } else if (playerVs === "scissors" && enemyVs === "paper") {
    currentMessage.innerHTML = messages.scissorsWin;
    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next Round";
    nextBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
    nextRound.appendChild(nextBtn);
    nextBtn.addEventListener("click", startGame);

    // enemey win options
  } else if (enemyVs === "scissors" && playerVs === "paper") {
    currentMessage.innerHTML = messages.enemyScissorsWin;
    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next Round";
    nextBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
    nextRound.appendChild(nextBtn);
    nextBtn.addEventListener("click", startGame);
  } else if (enemyVs === "paper" && playerVs === "rock") {
    currentMessage.innerHTML = messages.enemyPaperWins;
    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next Round";
    nextBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
    nextRound.appendChild(nextBtn);
    nextBtn.addEventListener("click", startGame);
  } else if (enemyVs === "rock" && playerVs === "scissors") {
    currentMessage.innerHTML = messages.enemyRockWins;
    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next Round";
    nextBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
    nextRound.appendChild(nextBtn);
    nextBtn.addEventListener("click", startGame);
  }
  roundUp();
  console.log(player.playerArr);
};

// var nextBtn = document.createElement("button");
// nextBtn.innerHTML = "Next Round";
// nextBtn.classList.add("btn", "btn-dark", "btn-lg", "btn-block");
// nextRound.appendChild(nextBtn);

// startGame();

bestOf3.addEventListener("click", startGame);

// Player gets three options to choose from
// function to append player choice and use math random to choose enemy choice

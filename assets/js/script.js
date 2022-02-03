var messageEl = document.querySelector("#message");
var playerChoiceEl = document.querySelector("#player-choice");
var enemyChoiceEl = document.querySelector("#enemy-choice");
var bestOf3 = document.querySelector("#best-of-3");
var rockSelectEl = document.querySelector("#rock");
var paperSelectEl = document.querySelector("#paper");
var scissorsSelectEl = document.querySelector("#scissors");
var enemyImgChoice = document.createElement("img");

var messages = {
  default: "Settle the score with classic roshambo",
  choose: "Choose your weapon",
  draw: "It's a draw. Try again",
  rockWins: "Rock busts scissors",
  paperWins: "Paper consumes rock",
  scissorsWin: "Scissors cut paper",
};

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

// Get random input from enemy
var randomChoice = function () {
  return enemy.choices[Math.floor(Math.random() * enemy.choices.length)];
};

// Push random input from enemy 
const currentEnemyChoice = randomChoice();
enemy.enemyArr.push(currentEnemyChoice);


console.log(player.playerArr);
console.log(enemy.enemyArr);

currentRound = 0;

// Display enemy choice
var enemyImg = "./assets/images/" + enemy.enemyArr[currentRound] + ".png";
enemyImgChoice.setAttribute("src", enemyImg);

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
  enemyImgChoice.setAttribute("id", randomChoice());
  player.playerArr.push('rock')
  evaluate();

};
var pickPaper = function () {
  playerChoiceEl.appendChild(paper);
  rockSelectEl.innerHTML = "";
  paperSelectEl.innerHTML = "";
  scissorsSelectEl.innerHTML = "";

  enemyChoiceEl.appendChild(enemyImgChoice);
  player.playerArr.push('paper')
  evaluate();




};
var pickScissors = function () {
  playerChoiceEl.appendChild(scissors);
  rockSelectEl.innerHTML = "";
  paperSelectEl.innerHTML = "";
  scissorsSelectEl.innerHTML = "";

  enemyChoiceEl.appendChild(enemyImgChoice);
  player.playerArr.push('scissors')
  evaluate();


};




// GAME LOGIC
var startGame = (event) => {
  bestOf3.innerHTML = "";

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

currentRound = 0;

// Evalute the round result

const evaluate = function () {
  console.log(player.playerArr[currentRound])
  console.log(enemy.enemyArr[currentRound])

  if (player.playerArr[currentRound] === enemy.enemyArr[currentRound]) {
    console.log("draw");
    currentMessage.innerHTML = messages.draw;
  } else {
    console.log('determine winner')
  }
  // startGame();
};

bestOf3.addEventListener("click", startGame);



// switch() statment
// Enemey
// rock > scissors
// paper > rock
// scissors > paper
// Player
// rock > scissors
// paper > rock
// scissors > paper
// Player gets three options to choose from
// function to append player choice and use math random to choose enemy choice

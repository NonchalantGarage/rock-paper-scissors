// Query Selectors for HTML elements to append to

var messageEl = document.querySelector("#message")
var playerChoiceEl = document.querySelector("#player-choice")
var enemyChoiceEl = document.querySelector("#enemy-choice")
var bestOf3 = document.querySelector("#best-of-3")


// Opening message to init game 
var openingMessage = document.createElement("span");
openingMessage.innerHTML= "Welcome to Nonchalant Rock Paper Scissors, where you play to play. Not play to win";
messageEl.appendChild(openingMessage);

var startBtn = document.createElement("button");
startBtn.innerHTML = "Best 2 of 3";
startBtn.classList.add("btn","btn-dark","btn-lg","btn-block");
bestOf3.appendChild(startBtn);

// Enemy OBJ choices
var enemy = {
    choices: ['rock','paper','scissors'] ,
};

var randomChoice = enemy.choices[Math.floor(Math.random() * enemy.choices.length)]



console.log(randomChoice);

// Player gets three options to choose from 
// function to append player choice and use math random to choose enemy choice




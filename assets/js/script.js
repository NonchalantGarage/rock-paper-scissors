// Query Selectors for HTML elements to append to

var messageEl = document.querySelector("#message")
var playerChoiceEl = document.querySelector("#player-choice")
var enemyChoiceEl = document.querySelector("#enemy-choice")
var bestOf3 = document.querySelector("#best-of-3")
var rockSelectEl = document.querySelector('#rock')
var paperSelectEl = document.querySelector('#paper')
var scissorsSelectEl = document.querySelector('#scissors')
var enemyImgChoice = document.createElement('img');


var messages = {
    default: "Settle the score with classic roshambo",
    choose: "Choose your weapon",
    draw: "It's a draw. Try again",
    rockWins: "Rock busts scissors",
    paperWins: "Paper consumes rock",
    scissorsWin: "Scissors cut paper",
}

// Opening message to init game 
var currentMessage = document.createElement("span");
currentMessage.innerHTML= messages.default;
messageEl.appendChild(currentMessage);

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

var enemyImg = "./assets/images/" + randomChoice + ".png";
enemyImgChoice.setAttribute('src', enemyImg);



var startGame = event => {
    bestOf3.innerHTML = ""

    currentMessage.innerHTML= messages.choose;

    var rock = document.createElement('img');
    rock.setAttribute('src', './assets/images/rock.png');
    rockSelectEl.appendChild(rock);
    rock.addEventListener('click',function(){
        playerChoiceEl.appendChild(rock);
        rockSelectEl.innerHTML = ''
        paperSelectEl.innerHTML = ''
        scissorsSelectEl.innerHTML = ''
        
        enemyChoiceEl.appendChild(enemyImgChoice);
    });

    var paper = document.createElement('img');
    paper.setAttribute('src', './assets/images/paper.png');
    paperSelectEl.appendChild(paper);
    paper.addEventListener('click',function(){(console.log('clicked paper'))});

    var scissors = document.createElement('img');
    scissors.setAttribute('src', './assets/images/scissors.png');
    scissorsSelectEl.appendChild(scissors);
    scissors.addEventListener('click',function(){(console.log('clicked scissors'))});
}    

bestOf3.addEventListener('click',startGame)
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




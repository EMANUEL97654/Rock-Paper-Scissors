const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click",animation));

choiceBtns.forEach(button => button.addEventListener("click", () =>{
    
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNumer = Math.floor(Math.random()*3) + 1;

    switch(randNumer){
        case 1:
            computer = "ROCK";
        break;
        case 2:
            computer = "PAPER";
        break;
        case 3:
            computer = "SCISSORS";
        break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lose!";
    }
}

function animation(){
    let timerId = null;
    let scaleX =1;
    let scaleY = 1;

    timerId = setInterval(text,5);

    function text(){
        if(scaleX >=2.0 || scaleY >=2.0){
            clearInterval(timerId);
        }
        else{
            scaleX+=0.01;
            scaleY+=0.01;
            resultText.style.transform ="scale("+scaleX+","+scaleY+")";
        }
    }
}
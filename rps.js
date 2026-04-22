const body = document.body;
const divRound = document.createElement("div");
const divScore = document.createElement("div");
const divFinal = document.createElement("div");


// ---------------------------
function getComputerChoice()
{
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let compChoice = "";

    let rand = Math.random();

    if(rand<=0.3)
    {
        compChoice = rock;
        return compChoice;
    }
    else if(rand>0.3 && rand<=0.6)
    {
        compChoice = paper;
        return compChoice;
    }
    else
    {
        compChoice = scissors;
        return compChoice;
    }

    // console.log(compChoice)
}

// let computer = getComputerChoice()

// -------------------------------



// ------------------------------

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice)
    {
        divRound.textContent = "Tie!";
        body.append(divRound);
    }
    else if(computerChoice=="rock" && humanChoice=="scissors")
    {
        computerScore=computerScore+1;
        divRound.textContent = "Computer wins! Rock beats Scissors";
        body.append(divRound);
    }
    else if(computerChoice=="paper" && humanChoice=="rock")
    {
        computerScore=computerScore+1;
        divRound.textContent = "Computer wins! Paper beats Rock";
        body.append(divRound);
    }
        else if(computerChoice=="scissors" && humanChoice=="paper")
    {
        computerScore=computerScore+1;
        divRound.textContent = "Computer wins! Scissors beats Paper";
        body.append(divRound);
    }
    else
    {
        humanScore = humanScore+1;
        divRound.textContent = "Human Wins! " + human + " beats " + computer;
        body.append(divRound);
    }

        divScore.textContent = "Computer: " + computerScore 
            + " Human: " + humanScore;
        body.append(divScore);

    if(humanScore == 5)
    {
        divFinal.textContent = "Human Wins the Game! Congradulatons!" +
        " Beating the computer " + computerScore + " to " + humanScore;
        body.append(divFinal);
    }
    else if(computerScore == 5)
    {
        divFinal.textContent = "Computer Wins the Game..." +
        " Beating you " + computerScore + " to " + humanScore;
        body.append(divFinal);
    }

}

let humanScore = 0;
let computerScore = 0;
let human = "";
let computer = "";


function playGame(buttonInput)
{

    human = buttonInput;
    computer = getComputerChoice();

    playRound(human, computer);
}

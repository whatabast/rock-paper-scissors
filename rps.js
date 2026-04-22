const body = document.body;
const div = document.createElement("div");


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
        div.textContent = "Tie!";
        body.append(div);
    }
    else if(computerChoice=="rock" && humanChoice=="scissors")
    {
        computerScore=computerScore+1;
        div.textContent = "Computer wins! Rock beats Scissors";
        body.append(div);
    }
    else if(computerChoice=="paper" && humanChoice=="rock")
    {
        computerScore=computerScore+1;
        div.textContent = "Computer wins! Paper beats Rock";
        body.append(div);
    }
        else if(computerChoice=="scissors" && humanChoice=="paper")
    {
        computerScore=computerScore+1;
        div.textContent = "Computer wins! Scissors beats Paper";
        body.append(div);
    }
    else
    {
        humanScore = humanScore+1;
        div.textContent =         "Human Wins! " + human + " beats " + computer;
        body.append(div);
    }

        console.log("Computer: " + computerScore 
            + " Human: " + humanScore)


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

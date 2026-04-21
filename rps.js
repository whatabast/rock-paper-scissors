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

let computer = getComputerChoice()

// -------------------------------

function getHumanChoice(rps)
{
    return rps.toLowerCase();
}
let human = getHumanChoice(prompt("Rock! Paper! Scissors"));

// ------------------------------

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for(let round = 0; round<5; round++)
    {
        

        function playRound(humanChoice, computerChoice)
        {
            if(humanChoice == computerChoice)
            {
                console.log("Tie!") 
            }
            else if(computerChoice=="rock" && humanChoice=="scissors")
            {
                computerScore=computerScore+1;
                console.log("Computer wins! Rock beats Scissors")
            }
            else if(computerChoice=="paper" && humanChoice=="rock")
            {
                computerScore=computerScore+1;
                console.log("Computer wins! Paper beats Rock")
            }
                else if(computerChoice=="scissors" && humanChoice=="paper")
            {
                computerScore=computerScore+1;
                console.log("Computer wins! Scissors beats Paper")
            }
            else
            {
                humanScore = humanScore+1;
                console.log("Human Wins! " + human + " beats " + computer);
            }

            console.log("Computer: " + computerScore 
                + " Human: " + humanScore)
                
        }

        human = getHumanChoice(prompt("Rock! Paper! Scissors"));
        computer = getComputerChoice();
        playRound(human, computer);

    }
}

playGame();

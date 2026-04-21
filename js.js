

// function getComputerChoice()
// {
//     let rock = "rock";
//     let paper = "paper";
//     let scissors = "scissors";
//     let compChoice = "";

//     let x = Math.random();

//     if(x<=0.3)
//     {
//         compChoice = rock;
//     }
//     else if(x>0.3 && x<=0.6)
//     {
//         compChoice = paper;
//     }
//     else
//     {
//         comChoice = scissors;
//     }
// }

// humanScore = 0;
// compScore = 0;

// function getHumanChoice()
// {
//     let humanChoice = prompt("Rock! Paper!Scissors!");
// }

function playRound()
{
     // Number of rounds
    let n = prompt("Number of rounds?")
    let humanChoice = "";
    // Game outcome
    let humanScore = 0;
    let compScore = 0
    // Computer chioce
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let compChoice = "";

    let x = Math.random();

    for(let i=0; i<n; i++)
    {
        x = Math.random();
        
        if(x<=0.3)
        {
            compChoice = rock;
        }
        else if(x>0.3 && x<=0.6)
        {
            compChoice = paper;
        }
        else
        {
            compChoice = scissors;
        }
    
        // Human Choice
        humanChoice = prompt("Rock! Paper! Scissors!");

        if(humanChoice == compChoice)
        {
            // return "Tie!" 
        }
        else if(compChoice==rock && humanChoice=="scissors")
        {
            compScore=compScore+1;
            // return compScore + " Comp win rock"
        }
        else if(compChoice==paper && humanChoice=="rock")
        {
            compScore=compScore+1;

            // return compScore + " Comp win paper"
        }
            else if(compChoice==scissors && humanChoice=="paper")
        {
            compScore=compScore+1;

            // return compScore + " Comp win scissors"
        }
        else
        {
            humanScore = humanScore+1;
            // return "Human wins! " + humanScore;
        }

    }
    
    return "Human: " + humanScore + " Computer: " + compScore;

}


// TESTING A RANDOM CHANGE TO SEE IF UI BRANCH WORKS
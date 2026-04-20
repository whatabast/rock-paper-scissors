

// function getComputerChoice()
// {
//     let rock = "rock";
//     let paper = "paper";
//     let scissors = "scissors";

//     let x = Math.random();

//     if(x<=0.3)
//     {
//         return rock;
//     }
//     else if(x>0.3 && x<=0.6)
//     {
//         return paper;
//     }
//     else
//     {
//         return scissors;
//     }
// }


function getHumanChoice()
{
    let hand = prompt("Rock! Paper!Scissors!");

    // return hand;

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let x = Math.random();

    if(x<=0.3)
    {
        return rock + hand;
    }
    else if(x>0.3 && x<=0.6)
    {
        return paper + hand;
    }
    else
    {
        return scissors + hand;
    }
}

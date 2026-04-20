

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
    let comp = "";

    if(x<=0.3)
    {
        comp = rock;
        // return rock + hand;
    }
    else if(x>0.3 && x<=0.6)
    {
        comp = paper;
        // return paper + hand;
    }
    else
    {
        comp = scissors;
        // return scissors + hand;
    }

    let score = 0;

    if(hand == comp)
    {
        score = score+0;
        return "Tie! " + score
    }
    else if(comp==rock && hand=="scissors")
    {
        score = score+1;
        return score + " Comp win rock"
    }
    else if(comp==paper && hand=="rock")
    {
        score = score + 1;
        return score + " Comp win paper"
    }
        else if(comp==scissors && hand=="paper")
    {
        score = score + 1;
        return score + " Comp win scissors"
    }
    else
    {
        return "Human wins! "
    }
}

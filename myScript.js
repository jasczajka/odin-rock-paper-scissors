function computerPlay()
{
    //randomly return "Rock", "Paper" or "Scissors and log it to the console"
    //random integer from 1 to 3
    let computerChoiceId = Math.floor((Math.random() * 3)) + 1;
    console.log(computerChoiceId);
    //depending on the number, return a corresponding round choice
    if( computerChoiceId === 1)
    {
        console.log("Rock");
        return "Rock";
    }
    else if (computerChoiceId === 2)
    {
        console.log("Paper");
        return "Paper";
    }
    else
    {
        console.log("Scissors");
        return "Scissors";
    }

}
computerPlay();
/* 
function gameRound(playerSelection, computerSelection)
{
    //play a random round of rock paper scissors and return the winner
    //player selection should be case insensitive
}

game()
{
    //5 round game
}
 */

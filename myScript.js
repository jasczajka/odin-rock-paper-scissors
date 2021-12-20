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
function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

function getPlayerSelection()
{
    //initialize the loop
    let keepGoing = true;
    //while the loop is initialized
    while(keepGoing)
    {
    //ask the user for input
        let choice = window.prompt("Choose Rock, Paper or Scissors", "Rock / Paper / Scissors");
    //capitalize the input
        choiceCapitalized = capitalize(choice);
    //if the input is valid
        if (choiceCapitalized === "Rock" || choiceCapitalized === "Paper" || choiceCapitalized === "Scissors")
        {
    //break the loop and return the value
            let keepGoing = false;
            return choiceCapitalized;
        }
    }
}
console.log(getPlayerSelection());

/* function gameRound(playerSelection, computerSelection)
{
    //play a random round of rock paper scissors and return the winner
    //player selection should be case insensitive
    //fix capitalization in playerSelectionvariable
    let playerSelectionCamelCase = playerSelection.capitalize();
    //check if player's input is valid
    if (playerSelectionCamelCase != "Rock" || playerSelectionCamelCase != "Paper" || playerSelectionCamelCase != "Scissors")
    {

    }
}
const gameButton = document.getElementById("gameButton");
gameButton.addEventListener("click",gameRound);
/* game()
{
    //5 round game
}
 */
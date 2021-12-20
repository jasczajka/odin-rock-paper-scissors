function computerPlay()
{
    //randomly return "Rock", "Paper" or "Scissors and log it to the console"
    //random integer from 1 to 3
    let computerChoiceId = Math.floor((Math.random() * 3)) + 1;
    //depending on the number, return a corresponding round choice
    if( computerChoiceId === 1)
    {
        console.log("Computer choice: Rock");
        return "Rock";
    }
    else if (computerChoiceId === 2)
    {
        console.log("Computer choice: Paper");
        return "Paper";
    }
    else
    {
        console.log("Computer choice: Scissors");
        return "Scissors";
    }

}

//a capitalize function that will remove unnecessary conditions
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

function playRound(playerSelection, computerSelection)
{
    //play a random round of rock paper scissors and return the winner

    //player chooses Rock
    if (playerSelection === "Rock")
    {
        if( computerSelection === "Rock")
        {
            return "Tie";
        }
        if (computerSelection === "Paper")
        {
            return "You lose! Paper beats Rock";
        }
        if (computerSelection === "Scissors")
        {
            return "You win! Rock beats Scissors";
        }
    }
    //player chooses Paper
    if (playerSelection === "Paper")
    {
        if( computerSelection === "Paper")
        {
            return "Tie";
        }
        if (computerSelection === "Rock")
        {
            return "You win! Paper beats Rock";
        }
        if (computerSelection === "Scissors")
        {
            return "You lose! Scissors beat Paper";
        }
    }
    //player chooses Scissors
    if (playerSelection === "Scissors")
    {
        if( computerSelection === "Scissors")
        {
            return "Tie";
        }
        if (computerSelection === "Paper")
        {
            return "You win! Scissors beat Paper";
        }
        if (computerSelection === "Rock")
        {
            return "You lose! Rock beats Scissors";
        }
    }

}

console.log(playRound (getPlayerSelection(), computerPlay()));
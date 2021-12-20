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
    let playerSelectionCapitalized = capitalize(playerSelection);
    if (playerSelectionCapitalized === "Rock")
    {
        if( computerSelection === "Rock")
        {
            console.log("Tie");
            return "Tie";
        }
        if (computerSelection === "Paper")
        {
            console.log("You lose! Paper beats Rock");
            return "You lose! Paper beats Rock";
        }
        if (computerSelection === "Scissors")
        {
            console.log("You win! Rock beats Scissors");
            return "You win! Rock beats Scissors";
        }
    }
    //player chooses Paper
    if (playerSelectionCapitalized === "Paper")
    {
        if( computerSelection === "Paper")
        {
            console.log("Tie");
            return "Tie";
        }
        if (computerSelection === "Rock")
        {
            console.log("You win! Paper beats Rock");
            return "You win! Paper beats Rock";
        }
        if (computerSelection === "Scissors")
        {
            console.log("You lose! Scissors beat Paper");
            return "You lose! Scissors beat Paper";
        }
    }
    //player chooses Scissors
    if (playerSelectionCapitalized === "Scissors")
    {
        if( computerSelection === "Scissors")
        {
            console.log("Tie");
            return "Tie";
        }
        console.log("You win! Scissors beat Paper");
        if (computerSelection === "Paper")
        {
            return "You win! Scissors beat Paper";
        }
        if (computerSelection === "Rock")
        {
            console.log("You lose! Rock beats Scissors");
            return "You lose! Rock beats Scissors";
        }
    }

}

function game()
{
    //5 round game that keeps score and reports winner and loser at the end
    //initialize score variables for both computer and player
    let computerScore = 0;
    let playerScore = 0;
    //5 rounds
    for (let i = 0; i < 5; i++)
    {
        //play 1 round
        let roundScore = playRound(getPlayerSelection(), computerPlay());
        if (roundScore.slice(0,4) === "Tie")
        {
            computerScore += 1;
            playerScore += 1;
        }
        if(roundScore.slice(4,7) ==="win")
        {
            playerScore += 1;
        }
        if(roundScore.slice(4,8) ==="lose")
        {
            computerScore +=1;
        }
        //show current score
        console.log(`computer score: ${computerScore}`);
        console.log(`player score: ${playerScore}`);
    }
    
}
game();

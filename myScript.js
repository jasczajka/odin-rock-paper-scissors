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
    //returns first falsy, so if s is empty, returns null
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

function playRound(e)
{
    //choice is made by clicking a button
    playerSelection = e.target.textContent;

    //choice is made randomly by computer
    computerSelection = computerPlay();
    //play a random round of rock paper scissors and return the winner

    //player chooses Rock
    let playerSelectionCapitalized = capitalize(playerSelection);
    let playerScore = Number(document.querySelector('#player-score').textContent);
    let computerScore = Number(document.querySelector('#pc-score').textContent);
    //reset the counter if any of the scores are 5
    if (playerScore === 5 || computerScore === 5 )
    {
    playerScore = 0;
    computerScore = 0;
    }
    
    if (playerSelectionCapitalized === "Rock")
    {
        if( computerSelection === "Rock")
        {
            console.log("Tie");
            playerScore ++;
            computerScore++;
        }
        if (computerSelection === "Paper")
        {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        if (computerSelection === "Scissors")
        {
            console.log("You win! Rock beats Scissors");
            playerScore ++;
        }
    }
    //player chooses Paper
    if (playerSelectionCapitalized === "Paper")
    {
        if( computerSelection === "Paper")
        {
            console.log("Tie");
            playerScore ++;
            computerScore++;
        }
        if (computerSelection === "Rock")
        {
            console.log("You win! Paper beats Rock");
            playerScore ++;
        }
        if (computerSelection === "Scissors")
        {
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        }
    }
    //player chooses Scissors
    if (playerSelectionCapitalized === "Scissors")
    {
        if( computerSelection === "Scissors")
        {
            console.log("Tie");
            playerScore ++;
            computerScore++;
        }
        
        if (computerSelection === "Paper")
        {
            console.log("You win! Scissors beat Paper");
            playerScore ++;
        }
        if (computerSelection === "Rock")
        {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
    }

    //update the scores after a round
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#pc-score').textContent = computerScore;
    //check if any of the scores reached 5, we have a winner then
    //first check for Tie
    if (playerScore === 5 && computerScore === 5)
    {
        let winnerDiv = document.createElement('div');
        winnerDiv.textContent = 'Tie!'
        let results = document.querySelector('.results');
        results.appendChild(winnerDiv);
    }
    else if (playerScore === 5)
    {
        let winnerDiv = document.createElement('div');
        winnerDiv.textContent = 'You win!'
        let results = document.querySelector('.results');
        results.appendChild(winnerDiv);
    }
    else if (computerScore === 5)
    {
        let winnerDiv = document.createElement('div');
        winnerDiv.textContent = 'You lose!'
        let results = document.querySelector('.results');
        results.appendChild(winnerDiv);
    }
    
}



//when DOM loaded, add event listeners to every button to play a Round
document.addEventListener("DOMContentLoaded", function() {
    const buttonsCollection = document.getElementsByTagName('button');
    const buttons = Array.from(buttonsCollection);
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click', playRound);
    }
    });
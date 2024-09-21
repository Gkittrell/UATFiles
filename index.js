


///this code below here is what creates our varaiable, function calls it, and the name of it is playgame()

function playGame(){
///below here are three variables, one containing the code for a random number, and the other prompts the user with a box to make a guess. .toLowerCase() is to ensure caps aren't an issue
    const randomNumber = Math.floor(Math.random()*2);
    const userGuess = prompt("Guess the outcome(Heads/Tails):").toLowerCase();

    let result;

    ///below here are my conditions the code must meet in order for the game to run properly.
    ///if the variable randomNumber is equal to 1 and the user guesses heads they win
    if (randomNumber === 1 && userGuess ==="heads")
        {
            result = "Congratulations! are you a psychic?"

    }
    ///if the variable is equal to 2 and the user guesses tails, they win
    else if (randomNumber === 2 && userGuess === "tails")
        {
        result = "Congratulations! You got it buddy !"
    }
    ///if the variable number is 0 the player loses

    else if (randomNumber === 0)
        {
        result = "Sorry you didnt get it right bub"

    }
    ///any other number at all, you also lose the game
    else {
        result="sorry you didnt get it right, sorry bub"
    }
    ///the code below here, displays the result on the webpage and allows for the html to get the document for viewing
    document.getElementById("result").innerHTML = result;




    
}



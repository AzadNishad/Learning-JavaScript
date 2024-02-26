// Function Composition: Write a function called compose that takes two functions f and g
// as arguments and returns a new function that computes f(g(x)) for any given input x.

function one(x){
    return x ** 2
}

function two(x){
    return x + 15
}

function compose(f, g){
    return function(x){
        return f(g(x))
    }
}


let composeFunction = compose(one, two)

// console.log(composeFunction(2))

// Rock, Paper, Scissors Game: Write a function playGame(player1, player2) that simulates a game of 
// rock, paper, scissors between two players. The function should take two arguments representing 
// the choices of each player and return the result of the game ("Player 1 wins", "Player 2 wins", or "It's a tie").

function playRPS(player1){

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const player2 = choices[randomIndex];

    console.log(player1.toLowerCase())
    console.log(player2)

    if ((player1.toLowerCase() === "paper" && player2.toLowerCase() === "rock") ||
        (player1.toLowerCase() === "rock" && player2.toLowerCase() === "scissors") ||
        (player1.toLowerCase() === "scissors" && player2.toLowerCase() === "paper") ){
        return "Player 1 Win 🎉🎉"
    } else if ((player1.toLowerCase() === player2.toLowerCase())){
        return "It's a tie"
    } else {
        return "Palyer 2 Win 🎉🎉"
    }
}

console.log(playRPS("paper"))
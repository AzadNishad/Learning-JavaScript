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

// console.log(playRPS("paper"))

// Temperature Converter: Write a function convertTemperature(value, unit) that takes a temperature value and its unit
// ("C" for Celsius or "F" for Fahrenheit) as arguments and converts it to the other unit. Use an if-else statement to
// implement the conversion logic.

function convertTemperature(value, unit){
    let temperature
    switch(unit){
        case 'C':
            temperature = (value * 9/5) + 32
            console.log(value + " C = " + temperature + " F")
            break
        case 'F':
            temperature = (value - 32) * 5/9
            console.log(value + " F = " +temperature + " C")
            break
        default:
            console.log("Invalid Unit")
    }
}

// convertTemperature(62, 'F')

// Password Strength Checker: Write a function checkPasswordStrength(password) that checks the strength of a password based on the following criteria:

// At least 8 characters long
// Contains at least one uppercase letter, one lowercase letter, one digit, and one special character
// Not containing the word "password"
// The function should return "Strong", "Medium", or "Weak" based on the strength of the password.

function checkPasswordStrength(password){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;


    if( regex.test(password)){ // `.test` is for checking the Regular Expresion from regex to password
        return "Password is Strong"
    } else if (password === "Password" || password === "password"){
        return "Password not containing `Password` or `password`"
    } else {
        return "Password is Weak"
    }
}

// console.log(checkPasswordStrength("!mX_V6@d"))

//  Write a function findMax(numbers) that takes an array of numbers as input and returns the maximum number. 
// Use an if-else statement to compare each number in the array and find the maximum.

function findMax(numbers){
    if (numbers.length == 0){
        return "Please enter numbers as arguments in the function"
    } 

    let maxNum = numbers[0] // save index 0 value in maxNum

    for (let i=1 ; i < numbers.length ; i++){ // check each index of array in  for loop
        if (numbers[i] > maxNum){  // check if indexed number is greater then maxNum 
            maxNum = numbers[i] // then maxNum is equal to indexed number
        }
    }
    return "The maximum number in ' "+ numbers + " ' is " + maxNum
}

const array = [12,54,24,65,53,94,3,64]
// console.log(findMax(array))
/*
A JavaScript Function is a block of code designed to perform a particular tasks.
Function is executed when somthing invokes id or call it.

example: here we create a function to sum of two numbers
*/
function sum(n1,n2){
    return n1 + n2
}

// console.log(sum(54,35))

/* Syntax:
        function functionName(para1,para2){
            function body 
        }

    `para` is called parameter
    Parameter are additional infomation passed to a function. the parameter are passed to the function within parentheses 
    after the function name and saperated by commas. 

    Arguments: Function arguments are the real values passed to (and received by) the function.
*/

// Arrow Function

// Find Square

const square = (no) => no ** 2;

// console.log(square(5))

// Find Odd/Even

const isEven = (no) => {
    if ( no % 2 == 0) {
        return "EVEN"
    } else {
        return "ODD"
    }
}

// console.log(isEven(6))

// Maximum Number

const maxNo = (n1,n2) => Math.max(n1,n2)

console.log(maxNo(51,24))
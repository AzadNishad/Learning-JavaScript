// String Reversal: Reverse a string without using built-in methods, only loops.

let str = "Hello, World!";
let reversedStr = "";

console.time('strReverse')
function strReverse() {
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
console.timeEnd('strReverse')

// while loop version

let revStrWhile = "";

console.time("whileRevStr")
function whileRevStr() {
    let i = str.length - 1;
    while (i >= 0) {
        revStrWhile += str[i];
        i--;
    }
    return revStrWhile;
}
console.timeEnd("whileRevStr")

// do while version

let doWhileRev = '';

console.time("dowhileRevStrTime");
function doWhileRevStr() {
    let i = str.length - 1;
    do {
        doWhileRev += str[i]
        i--;
    } while (i >= 0)
    return doWhileRev;
}
console.timeEnd("dowhileRevStrTime");

// Example usage:
console.log(str.length)
console.log(strReverse());
console.log(whileRevStr());
console.log(doWhileRevStr());


// Write a  `for` loop that prints numbers  1 to 10

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Create a `for` loop that prints only even numbers from 2 to 20

// for (let i = 1; i <= 20; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// given an aaray `[1,2,3,4,5]`. use `for` loop to calculate the sum of all elemnets

const arr = [1,2,3,4,5];
let sum = 0

/*
MY MISTAKE: 
for (let i = 0; i <= arr.length; i++) { 
     sum += i;
 }

REASON: The loop condition should be `i < arr.length` instead of `i <= arr.length` to avoid accessing an undefined index in the array. Additionally, `sum += i;` should be `sum += arr[i];` to add the actual elements of the array to the sum.

WHY IT'S WRONG: 
1. The loop runs one extra iteration when `i` equals `arr.length`, which is out of bounds for the array.
2. The expression `sum += i;` adds the index `i` to `sum`, not the value at that index in the array.
*/

// for (let i = 0; i < arr.length; i++) { 
//     sum += arr[i];
// }

// console.log(sum)

// Write a for loop that counts down from 10 to 1.

for (let i = 10; i > 0; i--) console.log(i);


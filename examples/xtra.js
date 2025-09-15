// Use a for...in loop to iterate through object properties.

/* const obj = {
    name : "Azad Nishad",
    age : 23,
    proffesion : "Frontend Developer",
    salery : "₹ 25000/-"
}

for (const me in obj) {
    console.log(`${me} : ${obj[me]}`)
} */

// Use a for...of loop to iterate through iterable objects like arrays or strings.

// const arr = ["Azad", "Nishad", 23, "Frontend Developer", "₹ 25000/-"]

// for (const ele of arr) {
//     console.log(ele)
// }

// Advanced Example:

// Create nested loops to print a multiplication table (1-5).

/* for (let i = 1; i <= 10; i++){
    let row = "";

    for(let j = 1; j <= 5; j++){
        row += ` ${j} * ${i} = ${(i * j).toString().padEnd(5, " ")}`
        // `padEnd` for giving padding in the end of the string 
    }

    console.log(row)
}
 */

// Write a loop that skips even numbers and stops at 15.

/* for(let i = 0;i <= 15;i++){
    if(i % 2 == 0) continue;
    console.log(i)
} */

// Compare the performance difference between different loop types.

/* console.time("for loop")
for(let i = 0;i < 1000000;i++){}
console.timeEnd("for loop")

console.time("while loop")
let i = 0;
while(i < 1000000){i++}
console.timeEnd("while loop")

console.time("do...while loop")
i = 0;
do{i++}while(i < 1000000)
console.timeEnd("do...while loop");

console.time("for...of loop")
const arr = Array.from({length: 1000000}, (_, i) => i);
for(const num of arr){}
console.timeEnd("for...of loop")

console.time("for...in loop")
const obj = {};
for(let i = 0;i < 1000000;i++) obj[i] = i;
for(const key in obj){}
console.timeEnd("for...in loop") */
// Note: Performance may vary based on the environment and specific use cases.
/* 
for loop: 2.679ms
while loop: 1.252ms
do...while loop: 1.084ms
for...of loop: 52.397ms
for...in loop: 117.108ms
 */

// Identify and fix an infinite loop scenario.

// let i = 0;
// while(i < 5){
//     console.log(i)
//     // i++; // Fixed by incrementing i
// }
// for(let i = 0;i < 5;){
//     console.log(i)
//     i++; // Fixed by incrementing i
// }
// for(let i = 0;i < 5;i--){
//     console.log(i)
//     // i++; // Fixed by changing i-- to i++
// }
// for(let i = 0;i < 5;i++){
//     console.log(i)
//     i--; // Fixed by removing i--
// }

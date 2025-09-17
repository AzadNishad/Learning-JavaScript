// Create a 3x3 matrix and find the sum of diagonal elements.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
/*
function mtxDigonalSum(mtx){
let sum = 0;
for(let i = 0; i < mtx.length; i++){
sum += mtx[i][i];
}
return sum;
}

console.log(mtxDigonalSum(matrix)) */

// Write a function that takes a 2D matrix and returns the sum of all its elements.

// let matrix2D = [
//     [1, 54, 3],
//     [4, 5, 6]
// ]

// console.time("mtxSum")
// function mtxSum(mtx) {
//     let sum = 0;
//     for (let i = 0; i < mtx.length; i++) {
//         for (let j = 0; j < mtx[i].length; j++) {
//             sum += mtx[i][j];
//         }
//     }

//     // for (let row of mtx) {
//     //     for (let ele of row) {
//     //         sum += ele;
//     //     }
//     // }
// // --------------------------------------
// //        BOTH LOGIC WORK PERFECT
// // --------------------------------------

//     return sum;
// }
// console.timeEnd("mtxSum")

// console.log(mtxSum(matrix2D))


// Convert rows to columns and vice versa.

// function mtxR2C(mtx){
    // let result = [];

    // for (let i = 0; i < mtx[0].length; i++){
    //     let row = []
    //     for (let j = 0; j < mtx[i].length; j++){
    //         row.push(mtx[j][i]);       
    //     }
    //     result.push(row)
    // }
    // return result;
// }

// console.log(mtxR2C(matrix));

// Return true if the number of rows equals the number of columns.

// const isMtxSqr = mtx => mtx.length === mtx[0].length ? true : false

// console.log(isMtxSqr(matrix))

// Classic matrix multiplication logic.
// FORMULA: A(m x n) * B(n x p) = C(m x p)

let mtxA = [
    [1, 2, 3],
    [4, 5, 6]
]
let mtxB = [
    [7, 8],
    [9, 10],
    [11, 12]
]
console.time("mtxMul")
function mtxMul(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {          // iterating through rows of mtxA
        let row = [];
        for (let j = 0; j < b[0].length; j++) {   // iterating through columns of mtxB
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) { // iterating through columns of mtxA or rows of mtxB
                sum += a[i][k] * b[k][j];          // multiplying and adding the elements
            }
            row.push(sum);                        // pushing the sum to the row
        }
        result.push(row);                        // pushing the row to the result
    }
    return result;
}
console.timeEnd("mtxMul")
console.log(mtxMul(mtxA, mtxB));
/* 
-----------------------------------------
              EXPLAINATION
-----------------------------------------

here trought the formula of matric multiplication we can say that
A(m x n) * B(n x p) = C(m x p)

where,
A = mtxA
B = mtxB
C = result
m = number of rows in mtxA
n = number of columns in mtxA or number of rows in mtxB
p = number of columns in mtxB
So, in the above code we have used three loops to iterate through the rows of mtxA, columns of mtxB and columns of mtxA or rows of mtxB respectively.
-----------------------------------------
*/



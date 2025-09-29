/* 
Create a pyramid pattern using nested loops:
 *
**
***
****
*****
 */

// for (let i =1; i <=5; i++){
//     let row = '';
//     for (let j =1; j <= i; j++){
//         row += '*';
//     }
//     console.log(row);
// }

// while loop

// let i = 1, j = 1, row = ""
// while(i<=5){
//     while(j<=i){
//         row += "*";
//         j++;
//     }
//     console.log(row);
//     i++;
// }

// do while loop

// let i = 1, j, row;
// do{
//     j = 1;
//     row = "";
//     do{
//         row += "*";
//         j++;
//     } while(j <= i);
//     console.log(row);
//     i++;
// } while(i <= 5);

/* 
Create a pyramid pattern using nested loops:
    *
   ***
  *****
 *******
*********
 */

// for (let i = 1; i<= 5; i++){
//     let row = "";
//     for (let j = 1; j <= 5 - i; j++){
//         row += " ";
//     }
//     for ( let k = 1; k <= 2 * i - 1; k++){
//         row += "*";
//     }
//     console.log(row)
// }


// while loop

// let i, j, k, row;
// i = 1;
// while (i <= 5) {
//     row = "";
//     j = 1;
//     k = 1;
//     while (j <= 5 - i) {
//         row += " ";
//         j++;
//     }
//     while (k <= 2 * i - 1) {
//         row += "*";
//         k++
//     }
//     console.log(row);
//     i++;
// }

// do while loop

// let i = 1, j, k, row;

// do {
//     row = "";
//     j = 1;
//     k = 1;
//     do {
//         if (j <= 5 - i) {
//             row += " ";
//         }
//         j++;
//     } while (j <= 5 - i);
//     do {
//         if (k <= 2 * i - 1) {
//             row += "*";
//         }
//         k++;
//     } while (k <= 2 * i - 1);
//     console.log(row);
//     i++;
// } while (i <= 5);
/* There are mainly three variables in JavaScript 
    1. var
    2. let
    3. const
*/
//  var :- 'var' variable is a function scope or global scope which mains they are accessible throughout the function in which they are declared, or globally if decleared outsid of the function.(Matlab, jo bhi variable ek function mein declare kiya gaya hai, uska access sirf us function mein hoga, ya agar woh function ke bahar declare kiya gaya hai, toh globally access kar sakte hain.)

// var naam = "Vishal"
// console.log(naam)  // output: Vishal
// var naam = "Prince"
// console.log(naam)  // output: Prince ~ we can re-decleared the var variable and re-assign 
// naam = "Asish"
// console.log(naam)  // output: Asish 

// function foo() {
//   var age = 54
//   console.log(naam)  // output: Asish 
//   console.log(age)  // output: 54 
// }
  // foo()
// console.log(naam)  // output: Asish 
// console.log(age)  // output: ReferenceError: age is not defined

// BUT

// if (true) {
//   var age = 54
//   console.log(naam)  // output: Asish 
//   console.log(age)  // output: 54 
// }
// console.log(naam)  // output: Asish 
// console.log(age)  // output: 54

// Hoisting in 'var' Variable

//     console.log(x) // output: undefined
//     var x = 4 

    /* it is act like
      var x
      console.log(x)
      x = 4 
      because 'var' are hoisted to the top of their function or global scope and initialized with a value of undefined. 
    */

// let :- 'let' variable is a block scope which means they are only accessible within the block '{}' in which they decleared. It con't re-decleared but can be re-assign the value.

// let letNaam = "Mohan"
// console.log(letNaam) // output: Mohan
// letNaam = "Manoj"
// console.log(letNaam) // output: Monoj

// But we con't re-decleared the variable
// let letNaam = "Pankaj"
// console.log(letNaam) // output: SyntaxError: Identifier 'letNaam' has already been declared

// function moo(){
//   let letAge = 21
//   console.log(letNaam) // output: Monoj
//   console.log(letAge) // output: 21
// }
// moo()
// console.log(letNaam) // output: Monoj
// console.log(letAge) // output: ReferenceError: letAge is not defined ~ Because it's block scope

// if (true) {
//   let letAge = 54
//   console.log(letNaam)  // output: Manoj 
//   console.log(letAge)  // output: 54 
// }
// console.log(letNaam)  // output: Manoj
// console.log(letAge)  // output: ReferenceError: letAge is not defined

// Hoisting in 'var' Variable

    // console.log(x) // output: ReferenceError: Cannot access 'x' before initialization
    // let x = 4 

    // Because 'let' are also hoisted, but they are not initialized. This means that accessing a let variable before its declaration (in the same block) results in a ReferenceError.


// const :- 'const' variable is like 'let' variable in terms of block scope, the differance between them if 'const' variable is decleared it cannot re-assaigned when it initialized. That means it is CONSTENT. 

// const Id = 12456;
// console.log(Id) // Output: 12456

// BUT WE CANNOT RE-ASSIGNE AND RE-DECLEARED THE VARIABLE IN 'const'

// Id = 64121;
// console.log(Id) // output: TypeError: Assignment to constant variable.
const Id = 64121;
console.log(Id) // output: SyntaxError: Identifier 'Id' has already been declared


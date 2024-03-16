// JavaScript Strings are squance of characters such as letters, numbers, symbols, or spaces,enclosed withi single quotes (''), double quotes (""), or backticks (``)

// example : 

let example1 = 'Hello there!'
let example2 = "How are you,"
let example3 = `I think you are fine`

// console.log(example1)
// console.log(example2)
// console.log(example3)

// To find string length using `length` property. 
// Syntex :

      let str = "Namuste! mera naam Azad Nishad hain. App ka kya naam hain?"
    //   console.log(str.length) // it count characters from 0 index

// we can also access the variables in string 
// 1st way :
    
    let str2 = "Namuste Bharat!"
    let str3 =  str2 + " Kaise hain app sabhi"
    // console.log(str3) // output : Namuste Bharat! Kaise hain app sabhi

// 2nd way :  String Interpoltioon ~ modern way

    let str4 = "Hello Sonu,"
    let str5 = `${str4} kaise ho tum?` // we access ${} with only backticks (``)  **imp
    console.log(str5) // output : Hello Sonu,! kaise ho tum?
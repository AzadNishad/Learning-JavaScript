/*
Every Variable has a data type that tells what kind of data is being stored in a variable.
There are two types of data types in JavaScript.
    1. Primitive Datatype
    2. Non-Primitive Datatype

Primitive Datatype -> Primitive data types are immutable, meaning their values cannot be changed once assigned.
                      There are Seven Primitive Data Types:
                      1. Number - Represents numeric values. It can be an integer or floating-point number
                      2. String - Represents a sequence of characters enclosed within single ('') or double ("") quotes.
                      3. bigInt - 
                      4. Boolean - Represents a logical value indicating `true` or `false`.
                      5. Null - Represents an intentional absence of any object value.
                      6. Undefined - Represents a variable that has been declared but not assigned a value.
                      7. Symbol - Represents a unique and immutable value used as object property keys.

Non-Primitive Datatype -> Non-primitive data types are mutable and can be modified
                          There main two types of it
                          1. Array - With the help of an array, we can store more than one element under a single name.
                          2. Object - Represents a collection of key-value pairs where values can be of any data type, including other objects.

*/

// The `typeof` operator returns a string indicating the type of the operand's value.

let number1 = 124
console.log(typeof number1)
let number2 = 124.51
console.log(typeof number2)

let string1 = "Namaste Bharat!"
console.log(typeof string1)
let string2 = 'Namaste Bharat! dubara'
console.log(typeof string2)

let bigInt = 1234567890123456789012345678901234567890n
console.log(typeof bigInt)

let boolean1 = true
console.log(typeof boolean1)
let boolean2 = false
console.log(typeof boolean2)

let nul = null
console.log(typeof nul) // typeof null returns "object", which is considered a historical bug in JavaScript.

let undef
console.log(typeof undef) //output: undefined

let sym = Symbol("foo")
console.log(typeof sym) 


let araay = [1, "Hello", true, null,]
console.log(typeof araay)
// Arrays are actually a special type of "object" in JavaScript. While they behave like a typical array in many ways, they are still technically objects and can have properties and methods like any other object.

// Object
let person = {
    fName : "Azad",
    lName : "Nisahd",
    age : 22
}
// console.log("My name is " + person.fName + " " + person.lName + " and I am " + person.age + " years old.")
console.log(typeof person)
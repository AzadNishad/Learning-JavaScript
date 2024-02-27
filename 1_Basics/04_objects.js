// JavaScript Objects are complex datatype that allow u to store collection of key:value pairs
// Objects can contain various types of data, including primitive values, other objects, and functions. 

// Create an object called book representing a book with properties for title, author, and pages.

const book = {
    title : "Ek Samandar, Mere Andar",
    author : "Sanjeev Joshi",
    pages : 645
}

// two way to print object keys

// console.log(book.title , book.author)
// console.log(book['title'] , book['author'])

book.publisher = "Penguin Books" // add new key and value
book.pages = 300 // change the value

// console.log(book)

/*  Create an object called car representing a car with properties for make, model, and engine, 
    where engine is another object with properties for cylinders and fuelType. */

    const car = {
        make : "BMW",
        model : "X7",
        engine : {  // nested oobject
            cylinders : "TwinPower Turbo Inline Six-Cylinder",
            fuelType : "Petrol"
        }
    }

    // console.log(car)

    // console.log(car.engine.fuelType)

/* Create an object called calculator with methods for addition, subtraction, multiplication, 
   and division. Each method should take two parameters (a and b) and return the result of the respective operation. */

   const calc = {
        add : (a,b) => a + b,
        sub : (a,b) => a - b,
        mul : (a,b) => a * b,
        div : (a,b) => a / b
   }

//    console.log(calc.div(5,6))
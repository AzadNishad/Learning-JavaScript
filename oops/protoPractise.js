/* 
1. Create an object car with a method drive().

2. Create another object tesla and set its prototype to car.

3. Call tesla.drive() and see how it works through the prototype chain.
 */

/* let car = {
    drive() {
        console.log("Car driving...")
    }
}
 
let tesla = {
    model: "Model S",
}

tesla.__proto__ = car

tesla.drive() */

// how this same prototype chain looks when using class syntax

/* class Car {
    drive() {
        console.log("car driving...");
    }
}

class Tesla extends Car {
    constructor(model){
        super()
        this.model = model
    }
}

let myCar = new Tesla("Model X")

myCar.drive() */

/* ------------------
# Why you must call super() first in a derived class
    -> Uninitialized this: In a subclass constructor, this isn’t created yet. JavaScript treats this as uninitialized (like a temporal dead zone) until super() runs.
    -> super() initializes this: Calling super() executes the base class constructor, which creates and initializes the this object for the subclass. Only after that can you access or assign to this.
    -> Spec guarantee: This rule ensures the parent’s setup logic runs before the child uses the instance. If this is touched before super(), you get ReferenceError.
-------------------- */

// 👉 Both attach drive to Car.prototype.
// The only difference is syntax — classes are a cleaner way of writing prototype-based inheritance.


// --------------------------------------------------------------------------------------------------------------
/* 
    -> Create a Vehicle class with a method start().
    -> Create a Bike class that extends Vehicle and overrides start().
    -> Create an instance of Bike and call start().
    -> Draw the prototype chain for your object on paper (or in your notes).
 */

/*  class Vehicle {
     start() {
         console.log("Vehicle starts")
     }
 }

 class Bike extends Vehicle {
     start() {
         // super.start() // it will call the start method of the Vehicle class
         console.log("Bike starts"); // it will call the start method of the Bike class
         console.log(this) // it will print the instance of the Bike class
     }
 }

 let myBike = new Bike()

 myBike.start()  */

/* 
    myBike
     |-- __proto__ --> Bike.prototype
                        |-- start: function()       // myBike.start() found here...
                        |-- __proto__ --> Vehicle.prototype
                                            |-- start: function()
                                            |-- __proto__ --> Object.prototype
                                                                |-- toString()
                                                                |-- hasOwnProperty()
                                                                |-- __proto__ --> null
*/

/* 
-> Create a Shape class with a method area(). 
-> Extend it into Circle and Square. 
-> Override area() in both classes to calculate correctly. 
-> Make an array of different shapes and loop through calling area(). 
This will show polymorphism in action.
*/

class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return Math.PI * (this.radius * this.radius)
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side
    }
}

class Ractangle extends Shape {
    constructor(width, hieght) {
        super();
        this.width = width;
        this.hieght = hieght;
    }
    area(){
        return this.width * this.hieght
    }
}

class Triangle extends Shape {
    constructor(base, hieght) {
        super();
        this.base = base;
        this.hieght = hieght;
    }
    area(){
        return (this.base * this.hieght) / 2
    }
}



const Shapes = [
    new Circle(5),
    new Square(29),
    new Circle(8),
    new Square(8),
    new Ractangle(10, 20),
    new Triangle(10, 20)
]

Shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`)
})
"use strict"
// it is used to prevent the use of undeclared variables

/* ===========================================
   THE `this` KEYWORD - SIMPLE EXPLANATION
   =========================================== */

// `this` is like a pointer that says "who is calling this function?"
// Its value changes depending on HOW the function is called, not WHERE it's written

console.log("=== `this` KEYWORD EXAMPLES ===\n");

// Example 1: Function called directly (default binding)
function sayHello(){
    console.log("this in sayHello:", this)
}

console.log("1. Function called directly:");
sayHello() // In strict mode: undefined, In non-strict: global object

// Example 2: Method called on an object (implicit binding)
const person = {
    name: "John",
    sayHello: sayHello,
    introduce() {
        console.log(`Hi, I'm ${this.name}`); // this = person object
    }
}

console.log("\n2. Method called on person object:");
person.sayHello() // this = person object
person.introduce() // this = person object

// Example 3: Same function, different objects
const person2 = {
    name: "Jane",
    sayHello: sayHello
}

console.log("\n3. Same function called on different object:");
person2.sayHello() // this = person2 object

// Example 4: Explicit binding with call()
console.log("\n4. Explicit binding with call():");
sayHello.call(person) // this = person (forced)
sayHello.call(person2) // this = person2 (forced)

// Example 5: Arrow functions inherit `this` from parent scope
const obj = {
    name: "Arrow Example",
    regularMethod() {
        console.log("Regular method this:", this.name); // this = obj
        
        const arrowFunc = () => {
            console.log("Arrow function this:", this.name); // this = obj (inherited)
        };
        
        const regularFunc = function() {
            console.log("Regular function this:", this); // this = undefined (strict mode)
        };
        
        arrowFunc();
        regularFunc();
    }
}

console.log("\n5. Arrow vs Regular functions:");
obj.regularMethod();

/* ===========================================
   THE `new` KEYWORD - SIMPLE EXPLANATION
   =========================================== */

// `new` creates a new object and calls a constructor function
// Think of it as a factory that makes objects

console.log("\n=== `new` KEYWORD EXAMPLES ===\n");

// Example 1: Constructor function (old way)
function Car(brand, model) {
    this.brand = brand;  // this = new object being created
    this.model = model;
    this.start = function() {
        console.log(`${this.brand} ${this.model} is starting...`);
    };
}

console.log("1. Creating objects with constructor function:");
const myCar = new Car("Toyota", "Camry");
const yourCar = new Car("Honda", "Civic");

myCar.start(); // Toyota Camry is starting...
yourCar.start(); // Honda Civic is starting...

console.log("myCar:", myCar);
console.log("yourCar:", yourCar);

// Example 2: Class syntax (modern way) - same thing, cleaner syntax
class Person {
    constructor(name, age) {
        this.name = name; // this = new instance
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    }
    
    haveBirthday() {
        this.age++; // this = current instance
        console.log(`Happy birthday! Now I'm ${this.age}`);
    }
}

console.log("\n2. Creating objects with class:");
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.greet(); // Hello, I'm Alice and I'm 25 years old
bob.greet(); // Hello, I'm Bob and I'm 30 years old

alice.haveBirthday(); // Happy birthday! Now I'm 26
alice.greet(); // Hello, I'm Alice and I'm 26 years old

// Example 3: What happens WITHOUT `new` (common mistake)
console.log("\n3. What happens WITHOUT `new` (DON'T DO THIS):");
function BadConstructor(name) {
    this.name = name; // Creates global variable!
}

// Without new - creates global variables!
const badResult = BadConstructor("Oops");
console.log("badResult:", badResult); // undefined
console.log("Global name:", name); // "Oops" - pollutes global scope!

// Example 4: Inheritance with classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Must call super() first!
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} the ${this.breed} barks: Woof!`);
    }
}

console.log("\n4. Inheritance example:");
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Buddy the Golden Retriever barks: Woof!

/* ===========================================
   KEY TAKEAWAYS
   =========================================== */

console.log("\n=== KEY TAKEAWAYS ===");
console.log("1. `this` changes based on HOW a function is called");
console.log("2. `new` creates objects and calls constructor functions");
console.log("3. Always use `new` with constructor functions");
console.log("4. Arrow functions inherit `this` from parent scope");
console.log("5. Classes are cleaner syntax for constructor functions");
console.log("6. In subclasses, call `super()` before using `this`");


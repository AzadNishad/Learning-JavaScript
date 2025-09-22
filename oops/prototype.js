/* 
In JavaScript, everything is built on objects, and every object has a hidden link to another object called its prototype.
This prototype can have properties (data) and methods (functions), and if the original object doesn’t have something, JavaScript will look into its prototype.

# Think of it like this:

    -> You have a notebook.
    -> If you don’t find the answer in your notebook, you check your friend’s notebook (the prototype).
    -> If your friend doesn’t have it either, he checks his friend’s notebook (the prototype’s prototype).
    -> This continues until the last notebook (called Object.prototype).

This chain is called the prototype chain.
*/

/* let animal ={
    eats: true,
    walk(){
        console.log("Animal walks")
    }
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

rabbit.walk();
console.log(rabbit.eats) */

/* 
# Here’s what happened:

    -> rabbit didn’t have eats or walk().
    -> JavaScript looked into its prototype (animal).
    -> Found them there and used them.

This is prototype-based inheritance.
*/

// ------------------------------------------------------------------

/* 
@ Prototype in Constructor Functions

When you create objects using a function (constructor), they automatically get linked to the function’s prototype object.
*/

/* function Person(name) {
    this.name = name
}

Person.prototype.sayNamuste = function() {
    console.log("Namuste! I,m " + this.name);
}

let user = new Person("Azad")
let user2 = new Person("Prince")

user.sayNamuste()
user2.sayNamuste() */

/* 
# Notice:

    -> The sayHello function is not copied into every object.
    -> Instead, both user1 and user2 share the same method through the prototype.
    -> This saves memory and keeps code organized. 
*/

// ------------------------------------------------------------------

/* 
@ Classes and Prototypes

Modern class syntax in JavaScript is just a cleaner way of working with prototypes.
*/

class Aadmi {
    constructor(name) {
        this.name = name
    }
    sayNamuste() {
        console.log("Namuste! I,m " + this.name)
    }
}

let me = new Aadmi("Azad")

console.log(me.name)
me.sayNamuste()

/* 
# Behind the scenes, this is doing:

    -> Create a function Person.
    -> Attach methods like sayHello to Person.prototype.
    -> Any object created with new Person() links to that prototype.

So, classes are just a prettier way of writing prototype-based code.
*/

// ----------------------------------------------------------------------

/* 
@ Why Prototype-Based?

    -> Memory-efficient → Methods are stored once in the prototype, not copied into every object.
    -> Shared behavior → All objects of the same type share the same methods.
    -> Dynamic → You can add methods to a prototype later, and all existing objects will instantly get them.
*/

Aadmi.prototype.sayBye = function() {
    console.log(this.name + " says bye!")
}

me.sayBye()
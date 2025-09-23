/* 
The `static` keyword is used to define class-level methods and properties.
That means they belongs to the class itself, not to any object created from the class.
Think like this:
    - A calculator class might have a static method to add two numbers.
    - You can call this method without creating a calculator object.
In JavaScript, static methods are often used for utility functions, constants, or factory 
methods that are relevant to the class but not to individual instances.

Why Use static?
- For utility functions that don’t depend on object data
- To create shared logic across all instances
- To organize code better (like Math.random() or Date.now())

*/

// ============================================

class Claculator {
    static add(a,b){
        return a+b;
    }
     
    multiply(a,b){
        return a*b;
    }
}

console.log(Claculator.add(4,5))

const calc = new Claculator()
console.log(calc.multiply(8,9))
console.log(calc.add(8,9))
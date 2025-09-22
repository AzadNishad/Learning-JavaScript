/* 
Inheritance in JavaScript helps one class to take features from another class,
so that you don’t have to repeat the code. The new class (child) gets all the 
properties and methods from the parent class and can also have its own properties.
*/

class Father {
    #property = []
    constructor(property, name){
        this.#property = property;
        this.name = name;
    }

    addProperty(property) {
        this.#property.push(property)
        console.log(this.name + " added: " + property)
    }

    seeProperty(){
        return this.#property
    }

    sellProperty(property) {
        let index = this.#property.indexOf(property)
        if(index !== -1){
            this.#property.splice(index, 1)
            console.log(`${this.name} sold: ${property}`);
            return true;
        } else {
            console.log(property + " not found in properties");
            return false;
            
        }
    }

    introduce() {
        console.log(`I am ${this.name}, I have ${this.#property.length} properties`);
    }
}

class Child extends Father {
    constructor(property, childName, age){
        super(property, childName);
        this.age = age;
    }
    
    // Override parent method
    introduce() {
        console.log(`I am ${this.name}, age ${this.age}, inherited ${this.seeProperty().length} properties`);
    }
    
    // Child-specific method
    playWithToys() {
        console.log(`${this.name} is playing with toys`);
    }
}

// Usage
const father = new Father(["House", "Car"], "John");
const child = new Child(["House", "Car"], "Little John", 8);

console.log("=== Father ===");
father.introduce();
father.addProperty("Land");

console.log("\n=== Child ===");
child.introduce();  // Overridden method
child.playWithToys();  // Child-specific method
child.addProperty("Toy Car");  // Inherited method

console.log("\n=== Inheritance Demo ===");
console.log("Father's properties:", father.seeProperty());
console.log("Child's properties:", child.seeProperty());

/* ===========================================
   POLYMORPHISM EXPLANATION
   =========================================== */

console.log("\n=== POLYMORPHISM DEMONSTRATION ===");

// Polymorphism means "many forms" - same method name, different behavior
// In our example, both Father and Child have introduce() method, but they behave differently

console.log("\n1. Method Overriding (Runtime Polymorphism):");
father.introduce();  // Calls Father's introduce() method
child.introduce();   // Calls Child's introduce() method (overridden)

// Same method name, different behavior based on object type!

console.log("\n2. Polymorphism with Arrays:");
const family = [father, child];

console.log("Calling introduce() on each family member:");
family.forEach(member => {
    member.introduce();  // Each object calls its own version of introduce()
});

console.log("\n3. Polymorphism in Action:");
function makeIntroduction(person) {
    person.introduce();  // This function doesn't know if it's Father or Child
}

makeIntroduction(father);  // Calls Father's introduce()
makeIntroduction(child);  // Calls Child's introduce()

/* ===========================================
   WHAT IS POLYMORPHISM?
   =========================================== */

/*
POLYMORPHISM = "Many Forms"

1. DEFINITION:
   - Same interface, different implementations
   - Same method name, different behavior
   - One method can have multiple forms

2. TYPES OF POLYMORPHISM:

   A) METHOD OVERRIDING (Runtime Polymorphism):
      - Child class overrides parent's method
      - Same method name, different behavior
      - Example: introduce() method in Father vs Child

   B) METHOD OVERLOADING (Compile-time Polymorphism):
      - Same method name, different parameters
      - JavaScript doesn't support this directly
      - Can be simulated with default parameters

3. BENEFITS:
   - Code reusability
   - Flexibility
   - Easier maintenance
   - Cleaner code structure

4. REAL-WORLD EXAMPLES:
   - Different animals making different sounds
   - Different shapes calculating different areas
   - Different payment methods processing payments
*/

console.log("\n=== POLYMORPHISM EXAMPLES ===");

// Example 1: Different Animals
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow! Meow!");
    }
}

const animals = [new Animal(), new Dog(), new Cat()];
console.log("Animal sounds:");
animals.forEach(animal => animal.makeSound());

// Example 2: Different Shapes
class Shape {
    calculateArea() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    calculateArea() {
        return this.width * this.height;
    }
}

const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Shape()
];

console.log("\nShape areas:");
shapes.forEach(shape => {
    console.log(`Area: ${shape.calculateArea()}`);
});

/* ===========================================
   KEY TAKEAWAYS
   =========================================== */

console.log("\n=== POLYMORPHISM KEY TAKEAWAYS ===");
console.log("1. Polymorphism = Same method name, different behavior");
console.log("2. Method overriding is the main type in JavaScript");
console.log("3. Objects of different types can be treated uniformly");
console.log("4. Makes code more flexible and maintainable");
console.log("5. Works with inheritance - child classes override parent methods");
console.log("6. Runtime decision: JavaScript decides which method to call");
console.log("7. Enables 'one interface, multiple implementations'");
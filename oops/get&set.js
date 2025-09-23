/* 
The get and set keywords are used to define getter and setter methods in a class.
i.e, they help you control access to an object's properties -> like a gatekeeper
of data that checks or formats data before allowing it to be read or modified.
 - Getters (get) are used to read the value of a property.
 - Setters (set) are used to update the value of a property.

Why Use Them?
- Add validation (e.g., don’t allow empty names)
- Format data (e.g., capitalize names)
- Hide internal logic while keeping a clean interface

*/

// ============================================
class Person {
    #name
    #age
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    // Getter for name
    get name() {
        return this.#name;
    }
    // Setter for name
    set name(newName) {
        this.#name = newName;
    }
    // Getter for age
    get age() {
        return this.#age;
    }
    // Setter for age
    set age(newAge) {
        if (newAge > this.#age) {
            this.#age = newAge;
        } else {
            console.log("New age must be greater than current age.");
        }
    }
}

const me = new Person("Azad", 22);
console.log(me.name);
console.log(me.age);

me.name = "Azad Nishad";
me.age = 21; // Valid update
console.log(me.name);
me.age = 25; // Invalid update
console.log(me.age);

console.log("\n============================================\n");

// Example with validation

class Product {
  #price = 0;

  // Getter
  get price() {
    return this.#price;
  }

  // Setter with validation
  set price(value) {
    if (value >= 0) {
      this.#price = value;
    } else {
      console.log("❌ Price can't be negative");
    }
  }
}

const item = new Product();
console.log(item.price);    // 0
item.price = 100;           // ✅ Sets price
console.log(item.price);    // 100

item.price = -50;           // ❌ Rejected
console.log(item.price);    // Still 100
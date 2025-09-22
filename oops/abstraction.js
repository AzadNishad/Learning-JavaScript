/* 
Abstraction means hiding complex details and showing only the essential parts. It’s like driving a car:
You press the accelerator, but you don’t need to know how the engine burns fuel or how the pistons move.
In JavaScript, abstraction helps you:
- Focus on what something does, not how it does it
- Keep code clean, modular, and easy to use
*/

// ============================================

class CoffeeMachine {
    // Private properties (using # for true privacy)
    #waterLevel = 0;
    #coffeeBeans = 0;
    #isOn = false;

    constructor(waterLevel, coffeeBeans) {
        this.#waterLevel = waterLevel;
        this.#coffeeBeans = coffeeBeans;
    }

    // Public method to turn on the machine
    turnOn() {
        this.#isOn = true;
        console.log("Coffee machine is now ON");
    }

    // Public method to turn off the machine
    turnOff() {
        this.#isOn = false;
        console.log("Coffee machine is now OFF");
    }

    // Public method to add water
    addWater(amount){
        this.#waterLevel += amount;
        console.log(`Added ${amount}ml of water. \nCurrent water level: ${this.#waterLevel}ml`);
    }

    addCoffeeBeans(amount){
        this.#coffeeBeans += amount;
        console.log(`Added ${amount}g of coffee beans. \nCurrent coffee beans: ${this.#coffeeBeans}g`);
    }

    // Public method to make coffee
    makeCoffee(){
        if(!this.#isOn){
            console.log("Please turn on the coffee machine first.");
            return;
        }
        if(this.#waterLevel < 200){
            console.log("Not enough water to make coffee. Please add more water minimum 200ml.");
            return;
        }
        if(this.#coffeeBeans < 15){
            console.log("Not enough coffee beans to make coffee. Please add more coffee beans minimum 15gm.");
            return;
        }
        this.#waterLevel -= 200; // Assume each coffee uses 200ml water
        this.#coffeeBeans -= 15; // Assume each coffee uses 15g coffee beans
        console.log("Coffee is ready! Enjoy your drink.");
    }
}

const myCoffeMac = new CoffeeMachine(500, 50);
myCoffeMac.makeCoffee(); // Should prompt to turn on the machine
myCoffeMac.turnOn();
myCoffeMac.makeCoffee();
myCoffeMac.makeCoffee();
myCoffeMac.makeCoffee();

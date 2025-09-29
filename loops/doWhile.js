import puch from '../../libs/puch.js'

// Create a do-while loop that shows a menu at least once and continues based on user choice.

async function showMenu() {
    let choose;

    do {
        console.log("📃 Menu:");
        console.log("1. Today's date");
        console.log("2. Random number");
        console.log("3. Time");
        console.log("4. Day");
        console.log("5. Exit")

        choose = await puch("\n choose the option (1-5): ")

        switch (choose) {
            case '1':
                console.log(`Today's date is ${new Date().toLocaleDateString()}`)
                break;
            case '2':
                console.log(`Random number: ${Math.floor(Math.random() * 100)}`)
                break;
            case '3':
                console.log(`Current time is ${new Date().toLocaleTimeString()}`)
                break;
            case '4':
                console.log(`Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`)
                break;
            case '5':
                choose = 'exit';
                console.log("Exiting the menu. Goodbye!")
                break;
            default:
                console.log("Invalid option. Please choose a number between 1 and 5.")
                break;
        }

    } while (choose !== 'exit');
}

// Write a do-while loop that prompts for a number between 1-100 until valid input is given.

async function promptNumber() {
    let number
     do {
        const input = await puch("\nEnter the between 1 to 100: ");
        number = Number(input);

        if(isNaN(number) || number < 1 || number > 100) {
            console.log("\n❌ invalid input, try again!")
        }
        
     } while (isNaN(number) || number < 1 || number > 100);

     console.log("\n✔️ Great number is valid")
}

promptNumber();
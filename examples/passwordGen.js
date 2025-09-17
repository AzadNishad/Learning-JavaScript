// Password Generator: Generate random passwords with specific criteria using loops
import puch from './../libs/puch.js'

async function generatePass() {
    const toBool = (val) => val.toLowerCase() === 'y';

    let isLower = toBool(await puch('Include lowercase letters? (y/n): '));
    let isUpper = toBool(await puch('Include uppercase letters? (y/n): '));
    let isSymbol = toBool(await puch('Include symbols? (y/n): '));
    let isNumber = toBool(await puch('Include numbers? (y/n): '));
    let lengthInput = await puch('Enter desired password length: ');
    let length = parseInt(lengthInput, 10);

    if (isNaN(length) || length <= 0) return 'Please enter a valid positive number for length.'


    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const number = '0123456789'
    const symbol = '@!$_-`?&%#'

    let allChars = ''
    if (isLower) allChars += lower
    if (isUpper) allChars += upper
    if (isNumber) allChars += number
    if (isSymbol) allChars += symbol
    if (allChars.length === 0) return 'Please select at least one character type.'

    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length)
        password += allChars[randomIndex]
    }
    return console.log('🔐 Generated Password:', password);
}
generatePass();
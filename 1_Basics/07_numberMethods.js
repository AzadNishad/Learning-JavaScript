//    toString Methods : it returns a number as String
let num1 = 7483
const toStr1 = num1.toString()

// console.log(toStr1)
// console.log(typeof(toStr1))

num1 = 1548n
const toStr2= num1.toString()
// console.log(toStr2)
// console.log(typeof toStr2)

num1 = "1548n" // already a string
const toStr3= num1.toString()
// console.log(toStr3)
// console.log(typeof toStr3)

num1 = NaN
// console.log(num1) // NaN 
// console.log(num1.toString()) // NaN (string)
// console.log(typeof num1.toString()) // string

/******************************************************************************************************* */

//  toFixed Method : it returns string, with the number writtern in specified number decimal

let num2 = 154.564
// console.log(num2.toFixed()) // output : 155 (rounding, no fractional part ~ from MDN)
// console.log(num2.toFixed(1)) // output : 154.6 (it rounds up ~ from MDN)
// console.log(num2.toFixed(4)) // output : 154.5640 (it shows the decimal and add extra 0)
// console.log(num2.toFixed(6)) // output : 154.564000 (it shows the decimal and add extra 0)
// console.log((1.234e10).toFixed()) // output : 12340000000
// console.log((1.234e10).toFixed(2)) // output : 12340000000.00
// console.log((1.35).toFixed(1)) // output : 1.4 (it rounds up)
// console.log((1.34).toFixed(1)) // output : 1.3
// console.log((1.55).toFixed(1)) // output : 1.6

// with -ve number

// console.log((-21.54).toFixed()) // output : -22
// console.log((-21.54).toFixed(1)) // output : -21.5
// console.log((-21.55).toFixed(1)) // output : -24.6
// console.log(-21.35.toFixed(1)) // output : -21.4

/******************************************************************************************************* */

// toPricision Method : it retunrs string, with number written with specified length

let num3 = 1.4584
// console.log(num3.toPrecision()) // output : 1.4584 (if no para retutns the whole number with the decimal as well)
// console.log(num3.toPrecision(1)) // output : 1 (if there para is `1` then it returns only one becuase it return specified length )
// console.log(num3.toPrecision(2)) // output : 1.5 (it round up)
// console.log(num3.toPrecision(3)) // output : 1.46
// console.log(num3.toPrecision(4)) // output : 1.458
// console.log(num3.toPrecision(6)) // output : 1.45840

num3= 0.000123;

// console.log(num3.toPrecision()); // '0.000123'
// console.log(num3.toPrecision(5)); // '0.00012300'
// console.log(num3.toPrecision(2)); // '0.00012'
// console.log(num3.toPrecision(1)); // '0.0001'

/******************************************************************************************************* */

// valueOf() Method : returns `Number` as a `Number` that means it is used to convert Number Object to Primitive value (Number)

let num4 = new Number(54)
// console.log(typeof num4) // Output : object
// console.log(typeof num4.valueOf()) // Output : number

/******************************************************************************************************* */

// Converting Valriables to Number
// The methods above are not number methods. They are global JavaScript methods.

// Number() : it's use to convert a variable to number, if the number is not converted  NaN (not a number) returns

let numStr1 = "Hello India"
// console.log(Number(numStr1)) // Output : NaN
// console.log(typeof Number(numStr1)) // Output : Number
// when Number is called as a constructor (with `new`), it return Number Object
// when Number is called as a function , return it's typeof is Number
// console.log(Number(true)) //Output : 1
// console.log(Number(false)) //Output : 0
// console.log(Number("10")) //Output : 10
// console.log(Number("    10")) //Output : 10
// console.log(Number("    10  ")) //Output : 10
// console.log(Number("10 30")) //Output : NaN
// console.log(Number("10,30")) //Output : NaN
// console.log(Number("10.30")) //Output : 10.3

/******************************************************************************************************* */

// parseInt : parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
//            parseInt is a global function and not a method of any object.

// console.log(parseInt("10")) // Output : 10
// console.log(parseInt("10.33")) // Output : 10
// console.log(parseInt("10 20 30")) // Output : 10
// console.log(parseInt("10 years")) // Output : 10
// console.log(parseInt("years 10")) // Output : NaN
// console.log(parseInt("10,20,30")) // Output : 10
// console.log(parseInt("10.20.30")) // Output : 10
// console.log(parseInt("-10.33")) // Output : -10
// console.log(parseInt("  10  ")) // Output : 10

/******************************************************************************************************* */

// parseFloat : parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned

// console.log(parseFloat("10")) // Output : 10
// console.log(parseFloat("100.31")) // Output : 100.31
// console.log(parseFloat("10 30 54 78")) // Output : 10
// console.log(parseFloat("10 Mountain")) // Output : 10
// console.log(parseFloat("Mountain 10")) // Output : NaN
// console.log(parseFloat("10.20.30")) // Output : 10.20
// console.log(parseFloat("-10.33")) // Output : -10.33
// console.log(parseFloat("  10  ")) // Output : 10


/******************************************************************************************************* */

// Number.isInteger() : it returns true if the number is an integer, and false if not.

// console.log(Number.isInteger(10)) // Output : true
// console.log(Number.isInteger(10.33)) // Output : false
// console.log(Number.isInteger(10/3)) // Output : false
// console.log(Number.isInteger(10/2)) // Output : true
// console.log(Number.isInteger("10")) // Output : false

/******************************************************************************************************* */

// Number.isSafeInteger() : it returns true if the number is a safe integer, and false if not.

// console.log(Number.isSafeInteger(10)) // Output : true
// console.log(Number.isSafeInteger(10.33)) // Output : false
// console.log(Number.isSafeInteger(101548422154215)) // Output : true
// console.log(Number.isSafeInteger(12345678901234567890)) // Output : false
// console.log(Number.isSafeInteger("10")) // Output : false

/******************************************************************************************************* */

// Number.isNaN() : it returns true if the number is NaN (Not a Number), and false if not.

// console.log(Number.isNaN(10)) // Output : false
// console.log(Number.isNaN(10.33)) // Output : false
// console.log(Number.isNaN("10")) // Output : false
// console.log(Number.isNaN(NaN)) // Output : true
// console.log(Number.isNaN("Hello")) // Output : false
// console.log(Number.isNaN(0/0)) // Output : true

/******************************************************************************************************* */

// Number.isFinite() : it returns true if the number is a finite number, and false if not.

// console.log(Number.isFinite(10)) // Output : true
// console.log(Number.isFinite(10.33)) // Output : true
// console.log(Number.isFinite("10")) // Output : false
// console.log(Number.isFinite(NaN)) // Output : false
// console.log(Number.isFinite("Hello")) // Output : false
// console.log(Number.isFinite(0/0)) // Output : false
// console.log(Number.isFinite(Infinity)) // Output : false

/******************************************************************************************************* */



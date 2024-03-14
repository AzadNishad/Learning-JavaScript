// JavaScript provides some built in methods to manipulating the Strings

/* .at() method : This method returns the charater at specified index in a string. The index value is write in (). It's introdused in ES2022
                  It allows the use of negative indexes while charAt() do not. Now you can use myString.at(-2) instead of charAt(myString.length-2). */

let str = "My name is Khan."
// to find at index 6 which character is place
// console.log(str.at(6)) // output : e

// -------------------------------------------------------------------------------------------------------------------------------

/* .charAt() method : it works same as `.at()`. but it's old method insted of `.at()` */

// console.log(str.charAt(6)) // output : e

// -------------------------------------------------------------------------------------------------------------------------------

/* .charCodeAt() : This method returns the unicode vlaue (for the ASCII Character Set) of character at specified index in a string  */

// console.log(str.charCodeAt(11)) // output : 75 ~ indexed charater K
// console.log(str.charCodeAt(6)) // output : 101 ~ indexed charater e

// -------------------------------------------------------------------------------------------------------------------------------

/* .concat() method : The .concat() method in JavaScript is used to concatenate (join together) two or more strings and returns
                      a new string. It doesn't change the original strings; instead, it returns a new string containing the combined text. */

let str1 = "What's your name?"
// console.log(str.concat(" ",str1)) // output : My name is Khan. What's your name?

// more expample -

let c = "hello"
let s = "world"
let f = "!"
// console.log(c.concat(", ", s, f)) // output : hello, world! ~ One or more strings to concatenate

// -------------------------------------------------------------------------------------------------------------------------------

/* .startWith() method : it returns `true` if string start with a specified string otherwise return `false` and it's a case sensitive */

// console.log(str1.startsWith("What")) // output : true
// console.log(str1.startsWith("what")) // output : flase (cause it's case sensitive)
// console.log(str1.startsWith("")) // output : true
// console.log(str1.startsWith()) // output : flase

// -------------------------------------------------------------------------------------------------------------------------------

/* .endsWith() method : The endsWith() method of String values determines whether a string ends with the characters of this string,
                        returning true or false as appropriate. */

// console.log(str.endsWith('.')) // output : true
// console.log(str.endsWith('khan.')) // output : flase ~ because the end word is `Khan.` (K is capital)
// console.log(str.endsWith('Khan.')) // output : true

// -------------------------------------------------------------------------------------------------------------------------------

/* .includes() : The .includes() method in JavaScript is used to determine whether a string contains another string within it. It 
                 returns true if the string contains the specified substring, and false otherwise. This method is case-sensitive. */

// console.log(str.includes('My')) // output : true
// console.log(str.includes('khan')) // output : false (case-sensitive)
// console.log(str.includes('Khan')) // output : true

// -------------------------------------------------------------------------------------------------------------------------------

/* .indexOf() methods : return the position of the first occurance of the a word in a string
                        it return -1 if word is not found
                        it is case sensitive */

let text = "The code undefined code code";
// console.log(text.indexOf("code")) // output: 4
// console.log(text.indexOf("code",4)) // output: 4 (search start from index 4)
// console.log(text.indexOf("code",6)) // output: 4 (search start from index 6 so it find code at 19 index at first)
// console.log(text.indexOf("Code")) // output: -1 (cause it's case sensitive)
// console.log(text.indexOf("")) // output: 0
// console.log(text.indexOf()) // output: 9 (no para returns undefined that's way indexOf search undefined at 9 index)

// -------------------------------------------------------------------------------------------------------------------------------

/* .lastIndexOf() methods : it's same as .indexOf(), but it searches the string from the end to the beginning*/

// console.log(text.lastIndexOf("code")) // output: 24
// console.log(text.lastIndexOf("code",24)) // output: 24  
// console.log(text.lastIndexOf("code",22))
// console.log(text.lastIndexOf("Code"))
// console.log(text.lastIndexOf(""))
// console.log(text.lastIndexOf())

// -------------------------------------------------------------------------------------------------------------------------------

/* prototype : The String.prototype property in JavaScript represents the prototype for the String constructor. 
               It allows you to add new properties and methods to all String objects. */

String.prototype.ultaStr = function () {
    return this.split('').reverse().join('')
    /* split() converts string into array then reverce() method reverce the array and then join() methods convert array into string */
}
let naam = "Azad Nishad"
// console.log(naam.ultaStr()) // output : dahsiN dazA

String.prototype.phelaBadaStr = function () {
    return this[0].toUpperCase() + this.slice(1)
}

let greet = "hello world"
// console.log(greet.phelaBadaStr()) // output : Hello world

// -------------------------------------------------------------------------------------------------------------------------------

/* .repeat() method : it returns the string witha no of copies of strings 
                      it return new string
                      it does not change original string */

str = "Hello"
// console.log(str.repeat(2))
let newStr = str.repeat(5)
// console.log(newStr)

// -------------------------------------------------------------------------------------------------------------------------------

/* .replace() method : it searches a string for a value or a regex to replace with new value
                       it returns new string with the value replaced and doesn't change the original string */

let Str = "I love coding & coding"
let replacedStr = Str.replace("coding", "programming")
// 1st para is value which can be selected and 2nd para is value which is replaced
// console.log(replacedStr) // Output: I love programming & coding (it replace only first value)

// -------------------------------------------------------------------------------------------------------------------------------

/* .replaceAll() method : it works like .replace() but it can replace all matched value */

let replaceAllStr = Str.replaceAll("coding", "Programming")
// console.log(replaceAllStr) // Output: I love Programming & Programming

// -------------------------------------------------------------------------------------------------------------------------------

/* .search() method : it matches the string against a value or a regex and return the index of the first mnatch and 
                      returns -1 if match not found. It's a case sansitive */

let txt = "Angry Bird Red has a red house"
let index = txt.search("red") // Output: 21
let index1 = txt.search("Red") // Output: 11
let index2 = txt.search(/red/) // Output: 21
let index3 = txt.search(/Red/) // Output: 11
let index4 = txt.search() // Output: 0
let index5 = txt.search("") // Output: 0
let index6 = txt.search("my") // Output: -1
// console.log(index)
// console.log(index1)
// console.log(index2)
// console.log(index3)
// console.log(index4)
// console.log(index5)
// console.log(index6)

// -------------------------------------------------------------------------------------------------------------------------------

/* .slice() method : it extract a part of a string and return it in a new string and doesn't change the oringinal string */

// console.log(txt)
let newTxt = txt.slice(11) // 11 is index position where to extract the string is called start para
// console.log(newTxt) // Output : Red has a red house
let newTxt1 = txt.slice(11, 20) // 20 is a index position where the extraction of the string is stop is called end para
// console.log(newTxt1) // output : Red has a
// negative index positon start from the end of the string

// -------------------------------------------------------------------------------------------------------------------------------

/* .spit() method : it split string into an arraty of substring and return a new array and doesn't change the oringinal string */

const arr = txt.split("")
// console.log(arr)
/* output : [
'A', 'n', 'g', 'r', 'y', ' ',
'B', 'i', 'r', 'd', ' ', 'R',
'e', 'd', ' ', 'h', 'a', 's',
' ', 'a', ' ', 'r', 'e', 'd',
' ', 'h', 'o', 'u', 's', 'e'
] */ 
// it split the black ""

const arr1 = txt.split(" ")
// console.log(arr1)
/* output : [
  'Angry', 'Bird',
  'Red',   'has',
  'a',     'red',
  'house'
] */
// it spilt the space " "
// if i split the "a"

const arr2 = txt.split("a")
// console.log(arr2) // output :  [ 'Angry Bird Red h', 's ', ' red house' ]

// if i split a value that doesn't match like double space

const arr3 = txt.split("  ")
// console.log(arr3) // output : [ 'Angry Bird Red has a red house' ]

// -------------------------------------------------------------------------------------------------------------------------------


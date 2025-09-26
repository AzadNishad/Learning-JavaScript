// Array means an ordered list of values that can be of any type
// Arrays are zero-indexed: the first element is at index 0, the second at index 1, and so on.
// Arrays are mutable: you can change their elements after creation.
// JS array-copy  operations create shallow copies, meaning they copy the references for objects and arrays within the array, not the actual objects or arrays themselves.
// shallow copy ka mutlub hai ke agar array ke andar koi object ya array hai to wo uska reference copy karega na ke us object ya array ko pura copy karega.
// Deep copy ka mutlub hai ke agar array ke andar koi object ya array hai to wo us object ya array ko pura copy karega na ke uska reference copy karega.
// Here some important array methods: push, pop, shift, unshift, splice, slice, concat, forEach, map, filter, reduce, find, findIndex, includes, indexOf, join, split, reverse, sort, etc.

// Creating an array
let fruits = [
  "mango",
  "apple",
  "grapes",
  "orange",
  "Blue Barry",
  "Kiwi",
  "kokam",
];
console.log("ORG " + fruits);
// ------------OR---------------
// let superHeros = new Object()
// superHeros = ["Ironman", "Spiderman", "Antman", "Hulk"]
// console.log(typeof superHeros)

//--------------- Methods ---------------

// 1. push() & pop() ------------------

// fruits.push("Dragan Fruit") // add in the last
// fruits.pop() // remove last index

// 2. shift() & unshift() ---------------

// fruits.unshift("Pineapple") // add in the first index of arr
// console.log(fruits)
// fruits.shift() // remove the frist index
// console.log(fruits)
// fruits.shift()

// 3. slice() & splice() ----------------

// let slicedFruits = fruits.slice(1, 4) // it will not change the original array
// console.log(slicedFruits)
// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// let splicedFruits = fruits.splice(2, 3, "Banana", "Pineapple", "Dragon Fruit", "Papaya", "watermelon") // it will change the original array
// console.log(splicedFruits)
// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (as many as you like). It modifies the original array and returns an array containing the deleted elements.

// 4. concat() -----------------

let moreFruits = ["Lichi", "Banana", "Avocada"];
let fev = ["chery", "sugercane"];
let basket = fruits.concat(moreFruits, fev); // marge two (one to another one) or more (one to another more) array and return a new array
//  -----------OR------------------
// let newBasket = [...fruits, ...moreFruits, ...fev] // spread operator
// fruits = [...fruits, ...moreFruits, ...fev, "Dragon Fruit"] // spread operator

// ----------XTRA----------------------------
// console.log(basket);
// console.log(basket.length);
// basket.length = 10
// // if we increase the length of an array then it will add empty items in the array
// // if we decrease the length of an array then it will remove items from the end of the array
// console.log(basket);
// console.log(basket.length);
// -----------------------------------------------

// 5. forEach() ------------------
// forEach() method executes a provided function once for each array element and it doesn't change the original array
// fruits.forEach(function (fruit, index, array) { // fruit = current element, index = index of current element, array = original array
//     // add any functionelity here except console.log
//     fruit = fruit.toUpperCase();
//     array[index] = fruit;   
//     console.log(fruit, index, array);

//     // fruits[index] = fruit.toUpperCase() // ye bhi kar sakte hain
//     // console.log(fruit.toUpperCase());

// });

// 6. map() ------------------
// map() method ek naya array return karta hai jismein har element par di gayi function apply hoti hai aur ye original array ko change nahi karta hai

let tokri = fruits.map(function (fruit, index, array) {
  fruit = fruit.toUpperCase();
  return fruit; // return karna zaroori hai warna undefined return karega
})
// console.log(tokri);

/* ----------------------XTRA----------------------------
    forEach() aur map() mein farq:
    1. forEach() kuch return nahi karta jabke map() ek naya array return karta hai.
    2. forEach() original array ko change kar sakta hai jabke map() original array ko change nahi karta.
    3. forEach() ka use tab hota hai jab humein sirf array ke elements par kuch operation karna ho bina naya array banaye, jabke map() ka use tab hota hai jab humein ek naya array chahiye jismein har element par kuch operation kiya gaya ho.
    4. forEach() mein hum return statement use nahi karte jabke map() mein return statement zaroori hai.
    ----------------------------------------------------- */

// 7. filter() ------------------
// filter() method ek naya array return karta hai jismein wo elements hote hain jo di gayi condition ko satisfy karte hain aur ye original array ko change nahi karta hai
// mutlub condition ke hisal se array ke elements ko filter karta hai aur usko naya array mein return karta hai

let citrusFruits = fruits.filter(function (fruit, index, array) {
    return fruit.length > 4; // condition jo satisfy karni hai 
    // return karna zaroori hai warna empty array return karega
});
// console.log(citrusFruits);

// 8. find() ------------------
// find() method array ke elements mein se pehla element return karta hai jo di gayi condition ko satisfy karta hai aur ye original array ko change nahi karta hai
// agar koi element condition ko satisfy nahi karta to undefined return karta hai

let foundFruit = fruits.find(function (fruit, index, array) {
    return fruit.length > 5; // condition jo satisfy karni hai
    // return karna zaroori hai warna undefined return karega
});
// console.log(foundFruit); // grapes
// console.log(typeof foundFruit); // string

// 9. findIndex() ------------------
// findIndex() method array ke elements mein se pehla element ka index return karta hai jo di gayi condition ko satisfy karta hai aur ye original array ko change nahi karta hai
// agar koi element condition ko satisfy nahi karta to -1 return karta hai

let foundIndex = fruits.findIndex(function (fruit, index, array) {
    return fruit.length > 5; // condition jo satisfy karni hai
    // return karna zaroori hai warna -1 return karega
});
// console.log(foundIndex); // 2

// 10. includes() ------------------
// includes() method check karta hai ke array mein koi specific element hai ya nahi aur ye original array ko change nahi karta hai
// ye true ya false return karta hai

let isMangoIncluded = fruits.includes("mango"); // true ya false
// console.log(isMangoIncluded); // true

// 11. indexOf() ------------------
// indexOf() method array ke elements mein se specific element ka index return karta hai aur ye original array ko change nahi karta hai
// agar element array mein nahi hai to -1 return karta hai
// ye jo bhi pehla match milega uska index return karega
// ye case-sensitive hota hai

let mangoIndex = fruits.indexOf("orange"); 
// console.log(mangoIndex); // 3

// 12. join() ------------------
// join() method array ke elements ko ek string mein convert karta hai aur ye original array ko change nahi karta hai
// hum join() method mein ek separator bhi de sakte hain jo elements ke beech mein aayega, agar separator nahi diya to default comma (,) use hota hai

let fruitString = fruits.join(" - "); // separator
// console.log(fruitString); // mango - apple - grapes - orange - Blue Barry - Kiwi - kokam
// console.log(typeof fruitString); // string

// 13. split() ------------------
// split() method string ko array mein convert karta hai aur ye original string ko change nahi karta hai
// hum split() method mein ek separator bhi de sakte hain jo string ko split karega, agar separator nahi diya to pura string ek hi element ke taur par array mein aa jayega

let fruitArr = fruitString.split(" - "); // separator
// console.log(fruitArr); // [ 'mango', 'apple', 'grapes', 'orange', 'Blue Barry', 'Kiwi', 'kokam' ]
// console.log(typeof fruitArr); // object

// 14. reverse() ------------------
// reverse() method array ke elements ko ulta kar deta hai aur ye original array ko *change karta* hai
// fruits.reverse();

// 15. sort() ------------------
// sort() method array ke elements ko alphabetically sort kar deta hai aur ye original array ko *change karta* hai
// fruits.sort(); // ascending order
// fruits.sort().reverse() // descending order

// 16. reduce() ------------------
// reduce() method array ke elements ko ek single value mein convert karta hai aur ye original array ko change nahi karta hai
// ye do value leta hai: ek callback function aur ek initial value (optional)
// callback function mein do parameters hote hain: accumulator (jo pehle se banta hai) aur current value (jo current element hai)

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 1); // initial value
// console.log(sum); // 16 (1+1+2+3+4+5) initial value phale add hoti hai
// Note: agar initial value nahi di to accumulator ki value pehle element ke barabar hoti hai aur current value doosre element ke barabar hoti hai

// 17. flat() ------------------
// flat() method nested arrays ko single array mein convert karta hai aur ye original array ko change nahi karta hai
let nestedArr = [1, 2, [3, 4], [5, 6, [7, 8]]];
let flatArr = nestedArr.flat(); // depth (kitne level tak flatten karna hai) default 1 hota hai
// console.log(flatArr); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
// let flatArr = nestedArr.flat(2); // depth 2
// console.log(flatArr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Note: agar array bahut zyada nested hai to hum Infinity bhi de sakte hain taake wo puri tarah flatten ho jaye
// let flatArr = nestedArr.flat(Infinity); // depth Infinity
// console.log(flatArr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 18. Array.isArray() ------------------
// Array.isArray() method check karta hai ke given value array hai ya nahi aur ye true ya false return karta hai
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray(fruitString)); // false

// 19. fill() ------------------
// fill() method array ke elements ko ek specific value se fill kar deta hai aur ye original array ko change karta hai
// fruits.fill("Papaya", 1, 4); // value, start index, end index (end index not included)
// console.log(fruits); // [ 'mango', 'Papaya', 'Papaya', 'Papaya', 'Blue Barry', 'Kiwi', 'kokam' ]
// fruits.fill("Papaya"); // agar sirf value di to pura array us value se fill ho jayega
// console.log(fruits); // [ 'Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya' ]
fruits.fill("Papaya", 1); // agar value aur start index di to start index se le kar end tak pura array us value se fill ho jayega
console.log(fruits); // [ 'mango', 'Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya', 'Papaya' ]



// map
// It create a new array from calling a function for every elements of array
// It does not execute the function for empty array
// It does not change the oringinal array

// Syntex :
/*      
        array.map(function(value,index,array),this)

        where - value = the value of the current element
                index = the index of the current element
                array = the array of the current element
*/

// example

const arr = [12,54,6,24,94,5,42]
console.log(arr)

const doubleArr = arr.map((value) => value * 2);
console.log(doubleArr)

const convC2F = arr.map((celsius) => (celsius * 9/5) + 32)
console.log(convC2F)

const strArr = ["asish", "azad", "vishal", "prince"]
const capitalize = strArr.map((value) => value[0].toUpperCase() + value.slice(1))
console.log(capitalize)

const arrOfObj = [
    {name : "Azad",age : 22},
    {name : "Vishal",age : 20},
    {name : "Devesh",age : 23},
    {name : "Prince",age : 22},
]
console.log(arrOfObj)

const extractFirstProperty = arrOfObj.map((obj) => obj.name)
console.log(extractFirstProperty)

const product = [
    {pNmae : "Water Bottle", price : 120, discount : 5},
    {pNmae : "Nike ka juta", price : 3500, discount : 10},
    {pNmae : "Samsung S24", price : 80000, discount : 15},
    {pNmae : "Galaxy Watch4", price : 25000, discount : 10},
    {pNmae : "Racket", price : 600, discount : 8}
]

const calDis = product.map(discount)

function discount(value){
    const dis = (value.discount * value.price)/100
    const sellPrice = value.price - dis

    return value.pNmae.concat(" ~ discount = ", dis, " ~ sell price = ", sellPrice)
}
console.log(calDis)

const strNum = ["15","54","35","64"]
console.log(strNum)
const convertStringToNumber = strNum.map((value) => parseInt(value))
console.log(convertStringToNumber)
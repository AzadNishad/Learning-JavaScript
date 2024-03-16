// arraay
// array is a data structure that hold multiple value in single variable
// normally sari value same data types ki hoti h

const myArray = [22,34,45,23]
const obj = {
    firstName:"vishal",
    lastName:"kalbi",
    fullName:function (){
        return this.firstName + this.lastName
    }


}

let len = myArray.length

myArray[4] = 10

console.log(len)
console.log(myArray)

let arrayToString = myArray.toString()
console.log(arrayToString)
console.log(typeof arrayToString)
console.log(typeof myArray)

console.log(Array.isArray(myArray))
console.log(myArray.sort())

const newArray = ['vishal','ashish','azad' ,'sahil']

const joinedString = newArray.join('and')
console.log(joinedString)

let popp = newArray.pop()

console.log(popp)
console.log(newArray)

let pushh = newArray.push('himanshu')

console.log(pushh)
console.log(newArray)


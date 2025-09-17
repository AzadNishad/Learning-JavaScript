// Flatten a nested array [[1,2], [3,4], [5,6]] using loops.
let nestedArr = [[1,2], [3,4], [5,6]];
// console.log(nestedArr.flat())
let flatArr = []

console.time('flatenArr')
function flatenArr() {
    for (let i = 0; i < nestedArr.length; i++) {
        for (let j = 0; j < nestedArr[i].length; j++) {
            flatArr.push(nestedArr[i][j]);
        }
    }
    return flatArr;
}
console.timeEnd('flatenArr')

// using recursion

console.time('flattenArray')
function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }   
    }
    return result;
}
console.timeEnd('flattenArray')

// other way to do it

console.time('flattenArrayIterative')
function flattenArrayIterative(arr) {
    const stack = [...arr];
    const result = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        }
        else {
            result.push(next);
        }
    }
    return result;
}
console.timeEnd('flattenArrayIterative')

// Example usage:
// console.log(flattenArray(nestedArr));
// console.log(flattenArrayIterative(nestedArr));
// console.log(flatenArr());


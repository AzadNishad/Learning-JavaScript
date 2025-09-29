// Given an array of integers and a target sum, return indices of two numbers that add up to target

function twoSum(nums, target) {
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numIndices) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
    return [];
}
// Example usage:
const nums = [2, 7, 11, 15];
const target = 17;
const result = twoSum(nums, target);
// console.log(result); // Output: [0, 3]
// EXPLAINation:
// The function twoSum takes an array of integers (nums) and a target sum (target).
// It uses an object (numIndices) to store the indices of the numbers as it iterates through the array.
// For each number, it calculates its complement (the number needed to reach the target sum).
// If the complement is already in the object, it returns the indices of the complement and the current number.
// If not, it adds the current number and its index to the object.
// If no such pair is found by the end of the loop, it returns an empty array.

// ------------------------------------------------------------------------------------------------------------------------------

// Remove duplicates in-place and return new length
function removeDuplicates(nums) {
    let seen = new Set();
    let writeIndex = 0;

    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (!seen.has(nums[readIndex])) {
            seen.add(nums[readIndex]);
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    return writeIndex;
}

function removeDuplicatesAlternative(nums) {
    if (nums.length === 0) return 0;
    let writeIndex = 1;
    for (let readIndex = 1; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== nums[readIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    return writeIndex;
}

// Example usage:
let arr = [1, 1, 2, 3, 3];
let newLength = removeDuplicates(arr);
console.log(newLength); // Output: 3
console.log(arr.slice(0, newLength)); // Output: [1, 2, 3]
// EXPLAINation:
// The function removeDuplicates takes a sorted array (nums) and removes duplicates in-place.
// It uses a Set (seen) to track unique elements and two pointers (readIndex and writeIndex).
// As it iterates through the array, it checks if the current number has been seen before.
// If not, it adds it to the Set, writes it to the writeIndex position, and increments writeIndex.
// Finally, it returns the new length of the array with unique elements.

// ------------------------------------------------------------------------------------------------------------------------------

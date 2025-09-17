// Duplicate Removal: Remove duplicates from an array using loops (no Set/filter).

function removeDuplicates(arr) {
    const result = [];
    let isCopyCat;
    let i = 0;
    do {
        isCopyCat = false
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isCopyCat = true;
                break;
            }
        }
        if (!isCopyCat) result.push(arr[i]);
        i++;
    } while (i < arr.length);
    return result;
}

let arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
let uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(`\nArray after removing duplicates: [${uniqueArray.join(", ")}]`);
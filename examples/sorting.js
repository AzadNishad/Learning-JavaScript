// Sorting Algorithm: Implement bubble sort using nested loops

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    let pass = 1;

    do {
        swapped = false;
        console.log(`Pass ${pass}: [${arr.join(", ")}]`);
        for (let i = 0; i < n - 1; i++) {
            console.log(`\n  is ${arr[i]} > ${arr[i + 1]} :`);
            if (arr[i] > arr[i + 1]) {
                console.log(`  Yes, swapping ${arr[i]} and ${arr[i + 1]}`);
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true;
                console.log(`  Swapped = [${arr.join(", ")}]`);
            } else {
                console.log(`  No, no swap needed`);
            }
        } 
        pass++;
    } while (swapped);
}

const array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(`Sorted array: [${array.join(", ")}]`);

// EXPLANATION STEP BY STEP HOW IT'S WORKING IN HINGLISH:
// 1. Humne ek function banaya hai jiska naam hai bubbleSort jo ek array leta hai as input.
// 2. Humne array ki length n mein store ki hai aur ek variable swapped banaya hai jo initially false hai.
// 3. Humne ek do...while loop banaya hai jo tab tak chalega jab tak swapped true rahega.
// 4. Har pass ke shuruat mein hum swapped ko false set kar dete hain aur current array ko print karte hain.
// 5. Hum ek for loop chalate hain jo array ke har element ko check karta hai (except last one).
// 6. Har iteration mein hum check karte hain ki current element (arr[i]) next element (arr[i + 1]) se bada hai ya nahi.
// 7. Agar haan, to hum dono elements ko swap karte hain, swapped ko true set karte hain, aur swap hone ke baad ka array print karte hain.
// 8. Agar nahi, to hum print karte hain ki swap ki zarurat nahi hai.
// 9. Jab for loop complete ho jata hai, to agar swapped true hai, to do...while loop firse chalega, warna loop khatam ho jayega.
// 10. Finally, hum sorted array ko print karte hain.
// ---------------------------------------------------------
// Note: Bubble sort is not the most efficient sorting algorithm for large datasets, but it's a great way to understand nested loops and sorting concepts.


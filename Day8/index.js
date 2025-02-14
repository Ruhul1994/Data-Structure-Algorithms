myArray = [1,2,3,4,5,6,7,8,9];
 // Example of linear church.

function linearChurch(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) return i+1;
    }
    return -1;
}

let resultIs = linearChurch(myArray,4);
console.log(resultIs);

// Binary search pseudocode
// function binarySearch(arr, number):
//     Initialize left to 0
//     Initialize right to length of arr - 1
//     while left is less than or equal to right:
//         Set mid to the floor of (left + right) / 2
//         if arr[mid] is equal to number:
//             return mid + 1
//         else if arr[mid] is less than number:
//             Set left to mid + 1
//         else:
//             Set right to mid - 1
//     return -1

// Example usage
let myArray = [1, 2, 99, 39, 44, 54, 66, 7, 8, 9];
function binarySearch(arr,value){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.round((start + end)/2);
        if(arr[mid] === value){
            return mid
        } else if (arr[mid] < value){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1
}
let result = binarySearch(myArray, 6);
console.log(result);

let sortingArray = myArray.sort((a,b)=>b-a);
console.log(sortingArray);

// Bubble sort pseudocode
// function bubbleSort(arr):
//     for i from 0 to length of arr - 1:
//         for j from 0 to length of arr - i - 1:
//             if arr[j] is greater than arr[j + 1]:
//                 Swap arr[j] and arr[j + 1]
//     return arr

// Example usage
const bubbleSort = (arr) => {
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // If no swapping occurred, array is already sorted
        if (!swapped) break;
    }
    return arr;
};

let sortedArray = bubbleSort(myArray);
console.log(sortedArray);






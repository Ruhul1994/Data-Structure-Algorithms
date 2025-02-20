// sequence check

// function sequenceCheck(arr){
// for (let i=0; i <arr.length; i++){
//     if(arr[i] > arr[i+1]){
//         return false;
//     }
// }
// return true;
// }

// let arr1 = [1,7,2,3,4,65,6,8,9,10];
// let arr2 = [1,2,3,4,5,6,7,8,9,10];
// let result = sequenceCheck(arr1);
// console.log(result);


// myArray = [1,2,3,4,5,6,7,8];

// for(let i = 0; i<= myArray.length; i++){
//     console.log("Length is: " + myArray.length);
//     console.log(myArray[i]);
//     if(myArray[i] == undefined){
//         return console.log("Array is not in sequence");
//     }
// }



// 2️ Check if an array contains duplicates.

// const myArray = [1, 2, 3, 4, 5, 6, 7,7,8, 8, 9, -10];
// Find the minimum number in an array.
// function findMin(arr){
//     let min = arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < min ){
//             min = arr[i];
//         }
//     }
//     return min;
// }

// console.log(findMin(myArray));

//  Remove all even numbers from an array.

// function removeEven(arr){
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(removeEven(myArray));

// Check if an array contains duplicates.


// function checkDuplicates(arr){
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//         if(result.includes(arr[i])){
//             return true;
//         }
//         result.push(arr[i]);   
//     }
//     return false;
// }

// console.log(checkDuplicates(myArray));

// HashMap practice

// Find the first non-repeating character in a string.
//  Given an array, return all pairs of numbers that sum to a target.
//  Count how many times each number appears in an array.

// Problem: Given an array, return true if there are any duplicate values, else false.

// myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// function findDuplicates(arr){
//     let seen = {};
//     for(let i=0; i<arr.length; i++){
//         if (seen[arr[i]]){
//             return true;
//         }
//         seen[arr[i]] = true;
//     }
//     return false;
// }

// console.log(findDuplicates(myArray));

// Problem: Given an array and a target sum, return the first pair of numbers that add up to the target.
// function twoSum(arr, target){
//     let seen = {};
//     for(let i=0; i<arr.length; i++){
//         let ele = arr[i];
//         let diff = target - ele;
//         if(seen[diff]){
//             return [diff, ele];
//         }
//         seen[ele] = true;
//     }
//     return [];
// }

// console.log(twoSum([3, 8, 12, 15], 20)); 

// Find the first non-repeating character in a string.

// function nonRepeatChar(sentence) {
//     let charCount = {};
//     for (let char of sentence) {
//         if (char !== ' ') {
//             charCount[char] = (charCount[char] || 0) + 1;
//         }
//     }
//     for (let char of sentence) {
//         if (char !== ' ' && charCount[char] === 1) {
//             return char;
//         }
//     }
//     return null;
// }

// console.log(nonRepeatChar("the man"));

// Given an array, return all pairs of numbers that sum to a target.
//  function findPairs(arr, target){
//         let result = [];
//         let seen = {};
//         for(let i=0; i<arr.length; i++){
//             let diff = target - arr[i];
//             if(seen[diff]){
//                 result.push([diff, arr[i]]);
//             }
//             seen[arr[i]]= true;
//         }
//         return result;
//  }

//  console.log(findPairs([3, 8,10,10, 12, 15], 20));

// Count how many times each number appears in an array.

function NumberAppears(arr){
    let result = {};
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        result[num] = (result[num] || 0) +1;
    }
    return result;
}

console.log(NumberAppears([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10]));
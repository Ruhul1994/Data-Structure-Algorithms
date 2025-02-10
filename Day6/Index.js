// function same(arr1, arr2) {
//     if(arr1.length != arr2.length){
//         return false
//     }

//     let sequenceCounter1= {};
//     let sequenceCounter2={};

//     for(let val of arr1){
     
//         sequenceCounter1[val] = (sequenceCounter1[val]  || 0)+1;
//     }
//     for(let val of arr2){
//         sequenceCounter2[val] = (sequenceCounter2[val] || 0) + 1;
//     }
// for(let key in sequenceCounter1){
   
//     if(!(key ** 2 in sequenceCounter2)){
//         return false;
// }
  
// if(sequenceCounter1[key] !== sequenceCounter2[key **2]){
//     return false;
// }
//   return true; 
// }
// }


// let results = same([2,3,4], [4,9,16]);
// console.log(results);

// Length Check: The function first checks if the lengths of arr1 and arr2 are different. If they are, it immediately returns false.

// Frequency Counters: Two objects (sequenceCounter1 and sequenceCounter2) are used to count the frequency of each value in arr1 and arr2, respectively.

// Frequency Comparison: The function iterates through the keys in sequenceCounter1 and checks:

//     If the squared value of the key exists in sequenceCounter2.

//     If the frequency of the key in arr1 matches the frequency of its squared value in arr2.

// Return True: If all checks pass, the function returns true.

// Example Output

// For the input same([2, 3, 4], [4, 9, 16]), the function will return true because:

// 2^2 = 4 is in arr2 with the same frequency.

// 3^2 = 9 is in arr2 with the same frequency.

// 4^2 = 16 is in arr2 with the same frequency.


function sumOfArray(arr){
    if(arr.length ===0) return 0
    let rest = arr.slice(1)
    return arr[0] + sumOfArray(rest)
}
console.log(sumOfArray([2,3,4]));

// arr[0== 4] = 4 + 0 = 4
// arr[0== 3] = 3 + 4 = 7
// arr[0== 2] = 2 + 7 = 9
// JavaScript "remembers" the values and computes the result step by step! by call stack
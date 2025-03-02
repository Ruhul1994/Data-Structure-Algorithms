//  Given a string, check if it is a palindrome (reads the same forward and backward).

// function Palindrome(str){
//     let left = 0;
//     let right = str.length -1;
//     while(left < right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left ++;
//         right --;
//     }
//     return true;
// }

// console.log(Palindrome('racecar')); 
// console.log(Palindrome('hello')); 

// Problem: Given a sorted array, remove duplicates in O(n) time without using extra space.

function removeDuplicates(arr){
    if (arr.length === 0) return 0;
    let uniqueIndex = 0;
    for (let i = 1; i<arr.length; i++){
        if(arr[i] !== arr[uniqueIndex]){
            uniqueIndex ++;
            arr[uniqueIndex] = arr[i];
        }
    }
    return uniqueIndex + 1;
}

console.log(removeDuplicates([1,1,2,2,3,4,5,5,6,7,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9])); 
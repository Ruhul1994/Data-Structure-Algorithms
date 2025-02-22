// Problem: Given a sorted array, return the indices of two numbers that add up to the given target.
// Example: [2, 7, 11, 15], target = 9, return [0, 1]
// Solution: Use two pointers to iterate through the array. If the sum of the two pointers is less than the target, increment the left pointer. If the sum is greater than the target, decrement the right pointer. If the sum is equal to the target, return the indices of the two pointers.
// Complexity: O(n)
function twoSum(array, target) {
    let left = 0;
    let right = array.length -1;
    while (left < right){
        let sum = array[left] + array[right];
        if (sum === target){
            return [array[left], array[right], `target: ${target}`];
        }else if (sum < target){
            left++;
        }else{
            right--;
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 18));
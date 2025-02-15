// Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.

// Example

// For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, substationElem) = [3, 2, 3].

// Input/Output

// [time limit] 400ms (js)
// [input] array.integer inputArray

// Guaranteed constraints:

// Guaranteed constraints:

// Guaranteed constraints:

// 2 ≤ inputArray.length ≤ 10,
// 0 ≤ inputArray[i] ≤ 10.

// 0 ≤ elemToReplace ≤ 10

// 0 ≤ subtractionElem ≤ 10

// [input] integer subtractionElem

// [output] array.integer

// [input] integer elemToReplace


function arrayReplace(inputArray, elemToReplace, subtractionElem) {
    return inputArray.map (el => el === elemToReplace ? subtractionElem : el);
}

console.log(arrayReplace([1, 2, 1], 1, 3)); // [3, 2, 3]


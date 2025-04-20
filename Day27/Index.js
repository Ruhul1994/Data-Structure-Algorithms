// let word = 'eye';

// function wordReverse(word) {
//     // Create a variable to hold the reversed word
//     let reversedWord = '';
//     // Loop through the word in reverse order
//   for(let i = word.length -1; i >= 0; i--){
//         // Add each letter to the reversed word
//         reversedWord += word[i];
//     }
//     // Return the reversed word
//     return reversedWord;
//     // Print the reversed word to the console22                                 
//   }
// console.log(wordReverse(word));


/**
 * reverse the sentence
 * @param {string} str - The string to reverse.
 * @return {string} The reversed string.
 */
function reverseString(str) {
    // Split the string into an array of characters
    let arr = str.split('');
    // Reverse the array of characters
    arr.reverse();
    // Join the reversed array back into a string
    return arr.join('');
}


let sentence = ""; // Initialize the sentence variable

/**
* @param {string} sentence.
* Count the number of words in a sentence and check the white space between the words.
* @return {number} count;
*/
function countWords(sentence) {
    if (sentence.trim() === '') return 0; // Handle empty or whitespace-only strings
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == ' ' && sentence[i - 1] != ' ') {
            count++;
        }
    }
    return count + 1;
}

let result = countWords(sentence);
console.log(`The word number = ${result}`);
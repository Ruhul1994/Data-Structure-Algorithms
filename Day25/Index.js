// console.log('Hello Ruhul please come back again');

let sentence = 'this is is my book. this is my book. this is my book in my bag.';

function removeDuplicateWords(sentence) {
    let words = sentence.split(' ');
    let uniqueWords = [];

    for (let i = 0; i < words.length; i++) {
        if (uniqueWords.indexOf(words[i]) === -1) {
            uniqueWords.push(words[i]);
        }
    }
    return uniqueWords.join(' ');
}

console.log(removeDuplicateWords(sentence));
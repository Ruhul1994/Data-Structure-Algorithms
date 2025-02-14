// insertion sort.

const myArray = [5, 3, 8, 4, 2];

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > currentVal){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            j--;
        
        }
    }
    return arr;
}
let result = insertionSort(myArray); 
console.log(result) // [2, 3, 4, 5, 8]
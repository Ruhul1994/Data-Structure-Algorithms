const myArray = [1,2,3,4,5,6,7,8,9];

// first check the Array first element is % 2 = 0
// if it result will be o then it push in evenNumber Array
// every time call the same function  again and again 
// use recursion 
// return a even Number array 

function findEven(arr) {
    let evenNumber = [];
    if (arr.length === 0) {
        return evenNumber;
    }
    if (arr[0] % 2 === 0) {
        evenNumber.push(arr[0]);
    }
    return evenNumber.concat(findEven(arr.slice(1)));
}

// let result = findEven(myArray);
// console.log(result);

// 👉 Choose the iterative function (findOdd) for better performance! 🚀

function findOddNumber(arr){
    let oddNumber = [];
    function helper(currentArray){
        if(currentArray.length === 0) return oddNumber;

        if(currentArray[0] % 2 == 1){
            oddNumber.push(currentArray[0])
        }

        helper(currentArray.slice(1));

    }
    helper(arr);
    return oddNumber;
}

// let result = findOddNumber(myArray);
// console.log(result);

// iterative method.
console.time("iterative")
function findOdd(arr){
    let oddNumber = []; 
    for(let i = 0; i <arr.length; i++){
        if (arr[i] % 2 == 1 ){
            oddNumber.push(arr[i])
        }
    }

    return oddNumber;
}

console.log(findOdd(myArray));

console.timeEnd("iterative")

//  For best performance, use the iterative method.
//  For a recursive solution, use the optimized version.

// the optimized version.
// console.time("Optimize")
// function oddNumberFind(arr, index = 0, oddNumber = []){
//     if(index === arr.length) return oddNumber;
//     if(arr[index] % 2 === 1){
//         oddNumber.push(arr[index]);
//     }
//     return oddNumberFind(arr,index + 1 ,oddNumber);
// }

// console.log(oddNumberFind(myArray));
// console.timeEnd("Optimize");
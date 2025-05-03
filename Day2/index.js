//general way to do logarithms in n time complexity.
// O(log n) time complexity
// function logarithmsN(n){
//     while(n>1) {
//         console.log(n);
//         n /= 2;
//     }
//     console.log("Done")
// }

// logarithmsN(8);

// // recursive way early return.

// function anotherLogN(n){
//     if(n <= 1 ){
//         console.log("done");
//         return 
//     }

//     console.log(n)
//     anotherLogN(n/2);
// }
// anotherLogN(12);




// myArray = [1,2,3,4,5,6,7,8,9,10];

// let newArray = myArray.filter(myFunction);
// function myFunction(value, index, array){
//     return value > 5;
// }

// console.log(newArray);

myArr =[12,3,4,5,6,8,64,];

let newArray = myArr.filter(myFunction)

function myFunction(value,index,array)
{return value > 20};
console.log(newArray);

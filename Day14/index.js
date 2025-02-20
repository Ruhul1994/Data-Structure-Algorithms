// Create an array of 5 elements using the Array Constructor.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6,7,8,9,10];
let arr3 = [11,12,13,14,15];
const children = arr1.concat(arr2, arr3);
// console.log(children);

// Create an array of 3 empty slots.

let arr4 = new Array(3).fill("Ruhul");

// console.log(arr4);

// Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

// let arr5 = [1, 2, 3, 4, 5, 6];
// console.log(arr5[arr5.length - 2]);

// Use the for loop on the above array to print elements in the odd index.

// for(let i=0; i<arr5.length; i++){
//     if(i % 2 !== 0){

//         console.log(arr5[i]);
//     }
// }

// Add one element at the front and the end of an array.
// arr3.unshift("Ruhul");
// arr3.push("Ruhul");
// console.log(arr3);

// Remove an element from the front and the end of an array.
// arr3.shift();
// arr3.pop();
// console.log(arr3);
// T-007: Create an array containing the name of your favorite foods(10 foods). Destructure the 6th food element from the array using destructuring.
// let favoriteFoods = ["Biriyani", "Kacchi", "Burger", "Pizza", "Pasta", "Noodles", "Fried Rice", "Kabab", "Pulao", "Bhuna Khichuri"];
// let [,,,,...rest] = favoriteFoods;
// console.log(rest);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
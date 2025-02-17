// sum the all elements by using foreach loop;

// function sum(...pram) {
//     let Totals = 0;
//     pram.forEach(elem => Totals += elem);
//     return Totals;
// }

// let totalSum = sum(1,2,3,4,5,67,1);
// console.log(totalSum);


// function sum(...pram) {
//    let total = pram.reduce((acc,e) => acc + e,0);
//     return total;
// }

// let totalSum = sum(1,2,3,4,5,67,1);
// console.log(totalSum);


// function starPrint(arr){
//     let star ="*";
//     for(let i =0; i <= arr.length -1; i++){
       
//             console.log(star);
//         }
//     }
//     starPrint([1,2,3,4,5]);


// function addBorder(picture){
//     let wall = "*".repeat(picture[0].length+ 2);
//     picture.unshift(wall);
//     picture.push(wall);
//     for(let i=1; i < picture.length-1; i++){
//         picture[i] = "*".concat(picture[i], "*");
//     }
//     return picture;
// }

// console.log(addBorder(["abcdef","med"]));
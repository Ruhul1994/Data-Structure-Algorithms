// sequence check

// function sequenceCheck(arr){
// for (let i=0; i <arr.length; i++){
//     if(arr[i] > arr[i+1]){
//         return false;
//     }
// }
// return true;
// }

// let arr1 = [1,7,2,3,4,65,6,8,9,10];
// let arr2 = [1,2,3,4,5,6,7,8,9,10];
// let result = sequenceCheck(arr1);
// console.log(result);


myArray = [1,2,3,4,5,6,7,8];

for(let i = 0; i<= myArray.length; i++){
    console.log("Length is: " + myArray.length);
    console.log(myArray[i]);
    if(myArray[i] == undefined){
        return console.log("Array is not in sequence");
    }
}
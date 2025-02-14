// you have a array you make a selection sort.

myArray =[44,5,2,3,1,45,12,14,66,22];
function selectionSort(arr){
for(let i=0; i<arr.length; i++){
    let lowest = i;

    for(let j = i +1; j< arr.length; j++){
        if(arr[lowest] > arr[j]){
            lowest = j;
        }
    }

    if(i !== lowest){
        let temp = arr[i];
        arr[i] = arr[lowest];
       arr[lowest] = temp
    }
}
return arr
}

let result = selectionSort(myArray);

console.log(result);
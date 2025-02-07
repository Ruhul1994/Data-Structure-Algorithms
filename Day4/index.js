let temperatures = [-2,4,45,23,-4,"error",-6,-8,34,43,Error,32,-1];

// create a variable of array high temperatures;
// create a variable of array low temperatures;

// if condition checked high is bigger then i then high = index i
//  if condition checked high is small then i then low = index i

// checked idex i type of and only allow number;
// return the number high - low;


function temperatureDown(arr){
    let high = [0];
    let low = [0];
    for(let i =0; i < temperatures.length; i++){
        if(typeof arr[i] !== 'number' || isNaN(arr[i])) continue;

        if(arr[i] > high) high = arr[i];
        if(arr[i] < low) low = arr[i];

    }

    return high - low;
}

let temp = temperatureDown(temperatures);
console.log(temp);
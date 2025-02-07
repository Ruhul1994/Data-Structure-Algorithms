function logarithmsN(n) {
    while(n>1) {
        console.log(n);
        n /= 2;
    }
    console.log("Done")
}

logarithmsN(8);

// recursive way early return.

function anotherLogN(n){
    if(n <= 1 ){
        console.log("done");
        return 
    }

    console.log(n)
    anotherLogN(n/2);
}
anotherLogN(12);


//  Given a string, check if it is a palindrome (reads the same forward and backward).

function Palindrome(str){
    let left = 0;
    let right = str.length -1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

console.log(Palindrome('racecar')); 
console.log(Palindrome('hello')); 
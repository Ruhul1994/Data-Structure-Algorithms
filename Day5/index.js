let myName = "k.m.Ruhul Kuddus";
function CharCount(str){
    let charList ={};
    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if(!/\d/.test(char) && char !== null){
            if(char === "." || char === " ") continue;
            if(charList[char] !== undefined){
                charList[char]++;
            }else{
                charList[char] = 1;
            }
        }
    }
    return charList;
}

let result = CharCount(myName);
console.log(result);
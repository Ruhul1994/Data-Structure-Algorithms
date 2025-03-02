// let row = 5;
// let col = 6;
// let star ='';
// for(let i=1; i<=row; i++){
//     for(let j=1; j<=col; j++){
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);


let rows = 5;
let cols = 16;
let star = "";
for (let i = 1; i<=rows; i++){
    for(let j=1; j<=cols; j++){
        if(j===1 || j===cols){
            star += "*";
        } else if(i===1 || i=== rows){
            star += "*"
        }else{
            star += " ";
        }
       
    }
    star += "\n";
}
console.log(star);
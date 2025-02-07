// function min5log (n){
//     for(let i = 0; i<=Math.max(5,n);i++){
//         console.log(i)
//     }
// }
// min5log(4);

function uniqName(array){
let uniqName =[];
for(let i=0; i<array.length; i++){
    let eachName = array[i];
    if(!uniqName.includes(eachName)){
        uniqName.push(eachName);
    }
}
return uniqName;
}
let nameArray =[ "suomi","Rased","mina","mina","tomas", "suomi","Rased"];
console.log(uniqName(nameArray));
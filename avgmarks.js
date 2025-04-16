
let marks=[87,7,45,90];
let sum=0;

for(let val of marks){
    sum+=val;
}

let avg=sum /marks.length;
console.log(sum);

console.log(`avg marks of class= ${avg}`);

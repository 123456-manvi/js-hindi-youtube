let items=[250,64,500,300,900];
let idx=0;


for(let val of items){
    console.log(`value at index ${idx}=${val}`);
    let offer=val/10;
    items[idx]=items[idx]-offer;
    console.log(`value after offer = ${items[idx]}`);
    idx++;
}

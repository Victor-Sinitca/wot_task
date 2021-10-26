let a = {
    k:'v',
    a: 'r'
};
a[Symbol.iterator] = function* (){
    let keys = Object.keys(a);
    for (let i=0; i<keys.length;i++)
        yield([keys[i], a[keys[i]]]);
    return;
}

for (let [k,v] of a){
    console.log(k, v);
}

a[Symbol.iterator] = function* (){
    let keys = Object.keys(a);
    let i=0
   return {
        next(){
            let value
        }
   }
}

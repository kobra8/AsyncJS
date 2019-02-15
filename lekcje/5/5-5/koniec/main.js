var p1 = new Promise(function(resolve, reject){
    resolve(10);
});

p1.then(function(v){
    v = v * 3;
    console.log(v);
});

p1.then(function(v){
    console.log(v);
});

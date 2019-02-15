var inputStream = Rx.Observable.of(1, 2, 3, 4);

var outputStream = inputStream
.map(function(v){
    return v * 2;
})
.reduce(function(x, y){
    return x + y;
});

outputStream.subscribe(function(v){
    console.log(v);
});

console.log(inputStream);

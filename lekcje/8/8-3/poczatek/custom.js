var inputStream = Rx.Observable.of(1, 2, 3, 4);

inputStream.subscribe(function(v){
    console.log(v);
});
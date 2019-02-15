function doubleAsync(v, callback) {
    setTimeout(function(){
        callback(v * 2);
    }, 2000);
}

var thunk = function(callback) {
    doubleAsync(3, callback);
}

thunk(function(result){
    console.log(result);
});
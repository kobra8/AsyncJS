function asyncFn(v) {
    setTimeout(function(){
        it.next(v * 2);
    }, 2000);
}

function* gen() {
    var result = yield asyncFn(2);
    console.log(result);
}

var it = gen();
it.next();

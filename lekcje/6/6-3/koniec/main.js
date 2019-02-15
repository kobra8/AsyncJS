function* fn() {
    yield 10;
    yield 20;
    yield 30;
}

var it = fn();
var result = it.next();
console.log(result);
result = it.next();
console.log(result);
result = it.next();
console.log(result);
console.log(result);

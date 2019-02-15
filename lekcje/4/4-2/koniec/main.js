function double(v) {
    return v * 2;
}

var thunk = function() {
    return double(3);
}

console.log(thunk());
console.log(thunk());
console.log(thunk());
console.log(thunk());
console.log(thunk());

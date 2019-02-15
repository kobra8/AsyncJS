function double(v) {
    return v * 2;
}

var thunk = function() {
    return double(3);
}

var result = thunk();
console.log(result);
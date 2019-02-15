var arr = [];

function addValue(v) {
    arr.push(v);
}

function get3() {
    addValue(3);
}

function get5() {
    addValue(5);
}

get3();
get5();
console.log(arr);

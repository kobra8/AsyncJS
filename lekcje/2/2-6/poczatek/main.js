var arr = [];

function addValue(v) {
    arr.push(v);
}

function logArr() {
    if (arr.length == 2) {
        console.log(arr);
    }
}

function get3() {
    addValue(3);
    logArr();
}

function get5() {
    addValue(5);
    logArr();
}

setTimeout(get3, Math.random() * 3000);
setTimeout(get5, Math.random() * 3000);
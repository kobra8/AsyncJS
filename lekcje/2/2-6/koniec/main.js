var arr = [];

function addValue(v) {
    if (v == 3) {
        arr[0] = v;
    } else if (v == 5) {
        arr[1] = v;
    }
}

function logArr() {
    if (arr.length == 2 && arr[0] != undefined && arr[1] != undefined) {
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
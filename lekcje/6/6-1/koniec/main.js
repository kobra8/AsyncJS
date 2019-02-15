var a = 1;

function fn1() {
    a++;
    fn2();
    console.log(a);
}

function fn2() {
    a++;
}

fn1();
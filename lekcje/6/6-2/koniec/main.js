var a = 1;

function* fn() {
    a++;
    yield; // pauza
    console.log(a);
}

var it = fn();

function increment() {
    a++;
}

it.next(); // uruchamiany generator
console.log(a);
increment();
it.next();

var requestStream = Rx.Observable.of(
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
);

var responseStream = requestStream
.flatMap(function(url){
    return Rx.Observable.fromPromise(fetch(url));
})
.flatMap(function(response){
    return response.json();
});

responseStream.subscribe(function(data){
    console.log(data.title);
});
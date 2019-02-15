var request = require('request');

request('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body) {
    console.log(body);
    request('https://jsonplaceholder.typicode.com/posts/2', function(error, response, body) {
        console.log(body);
    });
});
var request = require('request');

request('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body) {
    console.log(error);
    console.log(body);
});
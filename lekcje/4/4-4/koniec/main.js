var request = require('request');

// request('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body) {
//     console.log(body);
// });

// request('https://jsonplaceholder.typicode.com/posts/2', function(error, response, body) {
//     console.log(body);
// });

function getResource(url) {
    return function(callback) {
        request(url, callback);
    }
}

var getPost1 = getResource('https://jsonplaceholder.typicode.com/posts/1');
var getPost2 = getResource('https://jsonplaceholder.typicode.com/posts/2');

getPost1(function(error, response, body){
    console.log(body);
    getPost2(function(error, response, body){
        console.log(body);
    });
})
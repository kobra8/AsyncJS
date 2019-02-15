var request = require('request');

// request('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body) {
//     console.log(body);
//     request('https://jsonplaceholder.typicode.com/posts/2', function(error, response, body) {
//         console.log(body);
//     });
// });

function getResource(url) {
    return new Promise(function(resolve, reject){
        request(url, function(error, response, body){
            if (error) {
                reject();
            } else {
                resolve(body);
            }
        });
    });
}

var p1 = getResource('https://jsonplaceholder.typicode.com/posts/1');
var p2 = getResource('https://jsonplaceholder.typicode.com/posts/2');

p1.then(function(text){
    console.log(text);
});
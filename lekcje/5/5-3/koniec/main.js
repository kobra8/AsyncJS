var request = require('request');

function logText(text) {
    console.log(text);
}

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

var post1 = getResource('https://jsonplaceholder.typicode.com/posts/1');
var post2 = getResource('https://jsonplaceholder.typicode.com/posts/2');
var post3 = getResource('https://jsonplaceholder.typicode.com/posts/3');

post1.then(logText)
.then(function(){
    return post2;
})
.then(logText)
.then(function(){
    return post3;
})
.then(logText);
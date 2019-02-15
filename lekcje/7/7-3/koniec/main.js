var request = require('request');

function logText(text) {
    console.log(text);
}

function getResource(url) {
    return new Promise(function(resolve, reject){
        request(url, function(error, response, body){
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
}

// var post2 = getResource('https://jsonplaceholder.typicode.com/posts/2');
// var post3 = getResource('https://jsonplaceholder.typicode.com/posts/3');

async function getData() {
    try {
        var post1 = await getResource('https://jsonplaceholder.typicode.com/posts/1');
        console.log(post1);
    }
    catch (error) {
        console.log(error);
    }
}

getData();
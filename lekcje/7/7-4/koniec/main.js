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


async function getData() {
    try {
        console.time('czas');
        var post1 = getResource('https://jsonplaceholder.typicode.com/posts/1');
        var post2 = getResource('https://jsonplaceholder.typicode.com/posts/2');
        var post3 = getResource('https://jsonplaceholder.typicode.com/posts/3');
        var [p1, p2, p3] = await Promise.all([post1, post2, post3]); 
        console.log(p1, p2, p3);
        console.timeEnd('czas');
    }
    catch (error) {
        console.log(error);
    }
}

getData();
/**
 * Created by sahil on 2017-01-25.
 */

// dependencies
let http = require('http');
let url = require('url');
let accounting = require('accounting');

http.createServer(function(request, response){
    let qs = url.parse(request.url, true).query;
    let method = qs.method;
    let x = parseInt(qs.x);
    let y = parseInt(qs.y);


    switch (method) {
        case 'add': response.end(`${x} + ${y} = ${x+y}`);
        case 'subtract': response.end(`${x} - ${y} = ${x-y}`);
        case 'multiply': response.end(`${x} X ${y} = ${x*y}`);
        case 'divide': response.end(`${x} / ${y} = ${x/y}`);
        default: response.end("Not----");
    }
}).listen(3000);
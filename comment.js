// Create a web server
// 1. Create a web server
// 2. Read the file
// 3. Read the data
// 4. Send the data to the client

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {
        res.end('Hello from the home side');
    } else if (req.url === '/about') {
        res.end('Hello from the about side');
    } else if (req.url === '/contact') {
        res.end('Hello from the contact side');
    } else if (req.url === '/userapi') {
        fs.readFile(`${__dirname}/userapi/userapi.json`, 'utf-8', (err, data) => {
            console.log(data);
            const objData = JSON.parse(data);
            res.end(objData[0].name);
        });
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('<h1>404 error page. Page does not exist.</h1>');
    }
});

server.listen(8000);
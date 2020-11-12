const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    // res.end('Hello World!');

    const body = fs.readFileSync('./index.html', 'utf8');
    res.end(body);

    // const style = fs.readFileSync('./style.css', 'utf8');
    // res.end(style);

    // const scenario = fs.readFile('./server.js', 'utf8');
    // res.end(scenario);
})

server.listen(process.env.PORT || 3000);

console.log('Server started');
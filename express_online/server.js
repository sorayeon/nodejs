const app = require('./app');
const port = 3000;
app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
})

// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html' });
//     res.write('Hello Server');
//     res.end();
// }).listen(3000);
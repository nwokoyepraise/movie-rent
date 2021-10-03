const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
   
})

server.listen(3001, function () {
console.log('server listening on port 3001')
});
const express = require('express');
const app = express();

const http = require('http');

/*
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("<h1>Olá ECGM, Bom dia!</h1>");
});
*/

const path = require('path');

app.use(express.static(path.resolve(__dirname,'static')));

app.get("/",(req,res)=> {
    res.send('<h1>Hello from express </h1>')
});

app.get("/pt/", (req,res) => {
    res.send('<h1>Olá com express </h1>')
});

const server = http.createServer(app);

server.listen(5000);
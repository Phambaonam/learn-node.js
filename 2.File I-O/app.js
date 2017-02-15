/**
 * Created by phambaonam on 16/02/2017.
 */

const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();
/*
// Synchronous
const configJson = fs.readFileSync('./config.json');
// return a object
const config = JSON.parse(configJson);
app.use(express.static(config.webServer.folder));

const httpServer = http.createServer(app);

httpServer.listen(config.webServer.port, (err) => {
    console.log(`web server listening on port ${config.webServer.port} `);

    if (err) {
        console.log(err.message);
        return;
    }
});

*/

// Asynchronous
fs.readFile('./config.json', 'utf8', (err, data) => {
    const config = JSON.parse(data);
    app.use(express.static(config.webServer.folder));

    const httpServer = http.createServer(app);

    httpServer.listen(config.webServer.port, (err) => {
        console.log(`web server listening on port ${config.webServer.port} `);

        if (err) {
            console.log(err.message);
            return;
        }
    });
});

console.log('reading config');
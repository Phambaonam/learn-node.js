/**
 * Created by phambaonam on 16/02/2017.
 */

const http = require('http');
const express = require('express');

const app = express();

// register a route to handle the request
app.use(express.static('www'));

const httpServer =  http.createServer(app);

httpServer.listen(3000,(err)=>{
    console.log('web server listening on port 3000');

    if(err){
        console.log(err.message);
        return;
    }
});
const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, '..', 'public')));

//put the rest of the middlerware here (json parsing, error handling, etc)


app.get('*', function(req, res, next){
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = app;
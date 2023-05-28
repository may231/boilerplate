const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/dist', express.static('dist'));
//put the rest of the middlerware here (error handling, etc)


app.get('*', function(req, res, next){
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = app;
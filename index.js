const express = require('express');
const app = express();
const calc = require();

app.get('/', function(req,res) {
    res.send('hello');
});

app.listen(3000);

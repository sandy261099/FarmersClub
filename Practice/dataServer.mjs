import express from 'express';
var app = express();
var datetime= new Date();
app.get('/date', function (req, res) {
    res.send(`Name: Sai Sandeep ${datetime}`);
});

const port = '1000';
const host = '127.0.0.26'

app.listen(port, host, function () {
    console.log(`link for : ${host}:${port}`);
});
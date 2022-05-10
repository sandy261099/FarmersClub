import express from 'express';
var app = express();
let count=0;

app.get('/netid', function (req, res) {
    count++
    res.send(`<p>Name: Sai Sandeep N NetID:FH1498<p>
              <p>Page visited ${count} time.<p>`);
});

const port = '1100';
const host = '127.0.0.27'

app.listen(port, host, function () {
    console.log(`link for : ${host}:${port}`);
});
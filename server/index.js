const express = require('express');
const path = require('path');
const fs = require('fs');
const imgFolder = path.join(__dirname, '../public/images/work');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', function(req, res) {
    fs.readdir(imgFolder, (err, files) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            console.log(files);
            res.json(files);
        }
    });
});

app.get('/', function(req, res) {
    res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
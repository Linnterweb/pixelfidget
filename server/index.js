const express = require('express');
const path = require('path');
const fs = require('fs');
const rread = require('readdir-recursive');
const imgFolder = path.join(__dirname, '../public/images/work');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', function(req, res) {
    let files = rread.fileSync(imgFolder);
    let captions = JSON.parse(fs.readFileSync(path.join(__dirname, 'captions.json'), 'utf8'));
    let payload = {
        files,
        captions
    };
    res.json(payload);
});

app.get('/about', function(req, res) {
    let about = JSON.parse(fs.readFileSync(path.join(__dirname, 'about.json'), 'utf8'));
    res.json(about);
})

app.get('/', function(req, res) {
    res.send();
});

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}!`));
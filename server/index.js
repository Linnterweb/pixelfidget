const express = require('express');
const path = require('path');
const fs = require('fs');
const rread = require('readdir-recursive');
const imgFolder = path.join(__dirname, '../public/images/work');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', function(req, res) {
    // fs.readdir(imgFolder, (err, files) => {
    //     if (err) {
    //         console.log(err);
    //         res.end();
    //     } else {
    //         console.log(files);
    //         res.json(files);
    //     }
    // });
    // rread.file(imgFolder, function(file) {
    //     console.log(file);
    //     res.json(file);
    // })
    let files = rread.fileSync(imgFolder);
    let captions = JSON.parse(fs.readFileSync(path.join(__dirname, 'captions.json'), 'utf8'));
    // let captions = fs.readFileSync(path.join(__dirname, 'captions.json'), 'utf8');
    console.log(captions);
    // files = rread.fileSync('./')
    console.log(files);
    let payload = {
        files,
        captions
    };
    res.json(payload);
});

app.get('/', function(req, res) {
    res.send();
});

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}!`));
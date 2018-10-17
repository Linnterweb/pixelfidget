fetch('/images').then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    //data can be named anything
    data.files.forEach(imageMaker);
    for (i = 0; i < Object.keys(data.captions).length; i ++) {
        let imgToBeCaptioned = document.getElementsByName(Object.keys(data.captions)[i]);
        console.log(imgToBeCaptioned[0].parentElement);
        let caption = document.createElement('h3');
        let overlay = document.createElement('div');
        caption.className = 'caption';
        overlay.className = 'overlay';
        caption.innerHTML = Object.values(data.captions)[i];
        overlay.appendChild(caption)
        imgToBeCaptioned[0].parentElement.appendChild(overlay);
    }
    // return data;
});
// .then(function(data) {
//     for (i = 0; i < Object.keys(data.captions).length; i ++) {
//         let imgToBeCaptioned = document.getElementsByName(Object.keys(data.captions)[i]);
//         console.log(imgToBeCaptioned[0].parentElement);
//         let caption = document.createElement('h3');
//         caption.className = 'caption';
//         caption.innerHTML = Object.values(data.captions)[i];
//         imgToBeCaptioned[0].parentElement.appendChild(caption);
//     }
// });

const workDiv = document.getElementById('work');

function imageMaker(image) {
    var fromHere = image.indexOf('/images');
    var restOfString = image.substr(fromHere);
    var endHere = image.lastIndexOf('/');
    var imgName = image.substr(endHere + 1).split('.').shift();
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    if (!restOfString.includes('.DS_Store')) {
        img.setAttribute('src', restOfString);
        img.setAttribute('name', imgName);
        img.className = 'work-item';
        imgDiv.className = 'img-div';
        imgDiv.appendChild(img);
        workDiv.appendChild(imgDiv);
    }
    
}

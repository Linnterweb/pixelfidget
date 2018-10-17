fetch('/images').then(function(response) {
    console.log(response);
    console.log(response.body);
    return response.json();
})
.then(function(data) {
    //data can be named anything
    data.forEach(imageMaker);
});

const workDiv = document.getElementById('work');

function imageMaker(image) {
    console.log(image);
    console.log(image.indexOf('/images'));
    var fromHere = image.indexOf('/images');
    var restOfString = image.substr(fromHere);
    console.log(restOfString);
    const imgDiv = document.createElement('div');
    // const imgThumbnail = document.createElement('div');
    const img = document.createElement('img');
    // img.setAttribute('src', "images/work/" + image);
    img.setAttribute('src', restOfString);
    img.className = 'work-item';
    // img.className += ' img-div';
    imgDiv.className = 'img-div';
    // imgThumbnail.className = 'work-thumbnail';
    // img.setAttribute('src', image);
    // workDiv.appendChild(img);
    // imgThumbnail.appendChild(img);
    imgDiv.appendChild(img);
    workDiv.appendChild(imgDiv);
}

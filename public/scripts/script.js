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
    // console.log(image);
    const imgDiv = document.createElement('div');
    // const imgThumbnail = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', "images/work/" + image);
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

const workDiv = document.getElementById('work');
const aboutDiv = document.getElementById('about');

about();

function work() {
    let logoText = document.createElement('h3');
    logoText.innerHTML = 'Logos';
    workDiv.appendChild(logoText);

    let logos = document.createElement('div');
    logos.setAttribute('id', 'logos');
    logos.className = 'x-scroll';
    workDiv.appendChild(logos);

    let realestateText = document.createElement('h3');
    realestateText.innerHTML = 'Real Estate';
    workDiv.appendChild(realestateText);

    let realestate = document.createElement('div');
    realestate.setAttribute('id', 'realestate');
    realestate.className = 'x-scroll';
    workDiv.appendChild(realestate);

    let otherText = document.createElement('h3');
    otherText.innerHTML = 'Other';
    workDiv.appendChild(otherText);

    let other = document.createElement('div');
    other.setAttribute('id', 'other');
    other.className = 'x-scroll';
    workDiv.appendChild(other);

    fetch('/images').then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data);
            //data can be named anything
            data.files.forEach(imageMaker);
            // for (i = 0; i < Object.keys(data.captions).length; i ++) {
            //     let imgToBeCaptioned = document.getElementsByName(Object.keys(data.captions)[i]);
            //     // console.log(imgToBeCaptioned[0].parentElement);
            //     let caption = document.createElement('h3');
            //     let overlay = document.createElement('div');
            //     caption.className = 'caption';
            //     overlay.className = 'overlay';
            //     caption.innerHTML = Object.values(data.captions)[i];
            //     overlay.appendChild(caption)
            //     imgToBeCaptioned[0].parentElement.appendChild(overlay);
            // }
            return data;
        })
        .then(function (data) {
            for (i = 0; i < Object.keys(data.captions).length; i++) {
                let imgToBeCaptioned = document.getElementsByName(Object.keys(data.captions)[i]);
                // console.log(imgToBeCaptioned[0].parentElement);
                let caption = document.createElement('h3');
                let overlay = document.createElement('div');
                caption.className = 'caption';
                overlay.className = 'overlay';
                caption.innerHTML = Object.values(data.captions)[i];
                overlay.appendChild(caption)
                imgToBeCaptioned[0].parentElement.appendChild(overlay);
            }
        });

    
    const logoDiv = document.getElementById('logos');
    const realestateDiv = document.getElementById('realestate');
    const otherDiv = document.getElementById('other');

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
            console.log(img);
            // console.log(img.getAttribute('src').includes('logos'));
            if (img.getAttribute('src').includes('logos')) {
                // console.log(img.getAttribute('src').includes('logos'));
                logoDiv.appendChild(imgDiv);
            } else if (img.getAttribute('src').includes('realestate')) {
                // console.log(img.getAttribute('src').includes('realestate'));
                realestateDiv.appendChild(imgDiv);
            } else if (img.getAttribute('src').includes('other')) {
                // console.log(img.getAttribute('src').includes('other'));
                otherDiv.appendChild(imgDiv);
            }
            // workDiv.appendChild(imgDiv);
        }

    }
}

function about() {
    fetch('/about').then(function(response) {
        return response.json();
    })
    .then(function(data) {

        let about = document.createElement('h1');
        about.innerHTML = data.about;
        aboutDiv.appendChild(about);

        let p1 = document.createElement('p');
        p1.innerHTML = data.p1;
        aboutDiv.appendChild(p1);

        let p2 = document.createElement('p');
        p2.innerHTML = data.p2;
        aboutDiv.appendChild(p2);

        let p3 = document.createElement('p');
        p3.innerHTML = data.p3;
        aboutDiv.appendChild(p3);
        
        let p4 = document.createElement('p');
        p4.innerHTML = data.p4;
        aboutDiv.appendChild(p4);
    })
}


const aboutBtn = document.getElementById('about-link');
aboutBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    workDiv.innerHTML = '';
    about();
})

const workBtn = document.getElementById('work-link');
workBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    aboutDiv.innerHTML = '';
    work();
})

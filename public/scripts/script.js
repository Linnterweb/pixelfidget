const workDiv = document.getElementById('work');
const aboutDiv = document.getElementById('about');
const aboutContainer = document.getElementById('about-container');

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
            data.files.forEach(imageMaker);
            return data;
        })
        .then(function (data) {
            for (i = 0; i < Object.keys(data.captions).length; i++) {
                let imgToBeCaptioned = document.getElementsByName(Object.keys(data.captions)[i]);
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
            imgDiv.addEventListener('click', createModal);
            imgDiv.appendChild(img);
            if (img.getAttribute('src').includes('logos')) {
                logoDiv.appendChild(imgDiv);
            } else if (img.getAttribute('src').includes('realestate')) {
                realestateDiv.appendChild(imgDiv);
            } else if (img.getAttribute('src').includes('other')) {
                otherDiv.appendChild(imgDiv);
            }
        }

    }
}

function about() {
    fetch('/about').then(function(response) {
        return response.json();
    })
    .then(function(data) {

        let textContainer = document.createElement('div');

        let logo = document.createElement('img');
        logo.className = 'julie-logo';
        logo.src = './images/JulieFaceLogo2018.png';
        aboutDiv.appendChild(logo);

        let about = document.createElement('h1');
        about.innerHTML = data.about;
        textContainer.appendChild(about);
        // aboutDiv.appendChild(textContainer);

        let p1 = document.createElement('p');
        p1.innerHTML = data.p1;
        textContainer.appendChild(p1);
        // aboutDiv.appendChild(p1);

        let p2 = document.createElement('p');
        p2.innerHTML = data.p2;
        textContainer.appendChild(p2);
        // aboutDiv.appendChild(p2);

        let p3 = document.createElement('p');
        p3.innerHTML = data.p3;
        textContainer.appendChild(p3);
        // aboutDiv.appendChild(p3);
        
        let p4 = document.createElement('p');
        p4.innerHTML = data.p4;
        textContainer.appendChild(p4);
        aboutDiv.appendChild(textContainer);
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

function createModal(ev) {
    let modalDiv = document.createElement('div');
    modalDiv.id = 'myModal';
    modalDiv.className = 'modal';
    let modalContent = document.createElement('img');
    modalContent.id = 'modalImg';
    modalContent.className = 'modal-content';
    modalContent.src = this.firstElementChild.src;

    modalDiv.appendChild(modalContent);
    document.body.appendChild(modalDiv);
    document.body.addEventListener('click', function() {
        if (event.target == modalDiv) {
            modalDiv.parentNode.removeChild(modalDiv);
        }
    })
}
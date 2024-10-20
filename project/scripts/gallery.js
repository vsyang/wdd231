const imgBase = 'images/';
const galleryURL = 'data/customers.json';

const photoHere = document.querySelector('#photo-here');
const dialog = document.querySelector('#clientelle-dialog');
const title = document.querySelector('#clientelle-dialog h3');
const closeBox = document.querySelector('#clientelle-dialog button');
const info = document.querySelector('#clientelle-dialog p');

closeBox.addEventListener('click', () => dialog.close());

async function getData() {
    const response = await fetch(galleryURL);
    const data = await response.json();
    displayItems(data.clients)
}


function displayItems(data) {
    data.forEach(client => {
        const photo = document.createElement('img');
        photo.src = `${imgBase}${client.image}`;
        photo.alt = `Client who chose to get a ${client.service}`;
        photo.className = 'photo';
        photo.loading = 'lazy';
        photo.width = 200;
        photo.height = 200;
        photo.addEventListener('click', () => showDialog(client));
        photoHere.appendChild(photo);
    })
}

getData()

function showDialog(client) {
    title.innerHTML = client.service;
    info.innerHTML = `
    Creation of ${client.stylist}
    <br>This service cost ${client.cost}+
    <br>If you'd like this transformation, ask our receptionist for a ${client.service}
    `;
    dialog.showModal();
}
import {temples} from '../data/temples.js'
console.log(temples);

import {url} from '../data/temples.js'
console.log(url);

const showHere = document.querySelector('#showHere');
const mydialog = document.querySelector('#mydialog');
const myTitle = document.querySelector('#mydialog h2');
const myClose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#mydialog p');

myClose.addEventListener('click', () => mydialog.close());

function displayItems(data){
    console.log(data)

    data.forEach(x => {
        const photo = document.createElement('img');
        photo.src = `${url}${x.path}`
        photo.alt = x.name;
        photo.addEventListener('click', () => showStuff(x))
        showHere.appendChild(photo);
    })
}

displayItems(temples)

function showStuff(x) {
    myTitle.innerHTML = x.name;
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}.`;
    mydialog.showModal();
}
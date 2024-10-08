import {levels} from './levels.js'

const showLevels = document.querySelector('#show-levels');
const showDialog = document.querySelector('#show-dialog');
const title = document.querySelector('#show-dialog h4');
const close  = document.querySelector('#show-dialog button');
const info = document.querySelector('#show-dialog p');

close.addEventListener('click', () => showDialog.close());

function displayItems(data){
    console.log(data)

    data.forEach(level => {
        const header = document.createElement('h4');
        header.innerHTML = level.name;
        const open = document.createElement('button');
        open.textContent = `Learn More`;
        open.title = `Learn More`;
        open.addEventListener('click', () => showInfo(level))
        showLevels.appendChild(header);
        showLevels.appendChild(open);
    });
}

displayItems(levels)

function showInfo(level) {
    title.innerHTML = level.name;
    info.innerHTML = `Fees: Monthly: ${level.monthly} Annual: ${level.annual}
        <br>Benefits: ${level.benefits.map(benefit => `✧ ${benefit}`).join('<br>')}`;
    showDialog.showModal();
}
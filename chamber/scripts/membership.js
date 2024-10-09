import {levels} from './levels.js'

const showLevels = document.querySelector('#show-levels');
const showDialog = document.querySelector('#show-dialog');
const title = document.querySelector('#show-dialog h4');
const close  = document.querySelector('#show-dialog button');
const info = document.querySelector('#show-dialog p');

close.addEventListener('click', () => showDialog.close());

function displayItems(data){

    data.forEach(level => {
        const levelContainer = document.createElement('div');
        levelContainer.classList.add('level')
        const header = document.createElement('h4');
        header.innerHTML = level.name;
        const open = document.createElement('button');
        open.textContent = `Learn More`;
        open.title = `Learn More`;
        open.addEventListener('click', () => showInfo(level));
       
        levelContainer.appendChild(header);
        levelContainer.appendChild(open);

        showLevels.appendChild(levelContainer);
    });
}

displayItems(levels)

function showInfo(level) {
    title.innerHTML = level.name;
    info.innerHTML = `
        <br><strong>Fees for Monthly/Annual:</strong> 
        <br>${level.monthly}/${level.annual}
        <br><br><strong>Benefits:</strong>
        <br>${level.benefits.map(benefit => `✧ ${benefit}`).join('<br>')}`;
    showDialog.showModal();
}
const imgUrl = 'images/';
const stylistURL = 'data/stylists.json';

const slider = document.querySelector('.slider');

async function getData() {
    const response = await fetch(stylistURL);
    const data = await response.json();
    displayStylists(data.stylists)
}

function displayStylists (data) {
    data.forEach(stylist => {
        const stylistCards = document.createElement('div');
        const sName = document.createElement('h3');
        const photo = document.createElement('img');
        const quote = document.createElement('p');

        stylistCards.classList.add('stylist-card');

        sName.innerHTML = stylist.name;

        photo.src = `${imgUrl}${stylist.image}`;
        photo.alt = `This is a photo of ${stylist.name}`;
        photo.loading = 'lazy';

        quote.innerHTML = `${stylist.quote}  -${stylist.name}`;

        stylistCards.appendChild(sName);
        stylistCards.appendChild(photo);
        stylistCards.appendChild(quote);

        slider.appendChild(stylistCards);
    });
}

getData();
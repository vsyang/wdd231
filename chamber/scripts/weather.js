const weather = document.querySelector('.weather-info');
const url = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'c8e24775a530c3c13e6c5c81a4f0e243';

async function apiFetch() {
    const latitude = 39.90;
    const longitude = -104.99;

    const apiUrl = `${url}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    const forecastURL = `${url}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    try {
        const response = await fetch(apiUrl);
        const forecastResponse = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            const forecast = await forecastResponse.json();
            displayResults(data, forecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data, forecast) {
    let currentTable = document.createElement('table');
    let currentHeader = document.createElement('thead');
    let currentBody = document.createElement('tbody');
    let currentRow = document.createElement('tr');
    let currentHeadSpan = document.createElement('th');
    
    let currentData = document.createElement('td');
    let icon = document.createElement('img');
    let iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;
    
    currentHeadSpan.textContent = 'Current Weather';
    currentHeadSpan.setAttribute('colspan', '3');
    currentHeader.appendChild(currentHeadSpan);
    currentTable.appendChild(currentHeader);

    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', description);
    icon.setAttribute('width', 50);
    icon.setAttribute('height', 50);
    icon.classList.add('weather-icon');
    currentData.appendChild(icon);
    currentRow.appendChild(currentData);

    currentData = document.createElement('td');
    currentData.innerHTML = `${data.main.temp}°F`;
    currentRow.appendChild(currentData);

    currentData = document.createElement('td');
    currentData.innerHTML = `${data.weather[0].description}`;
    currentRow.appendChild(currentData);

    currentBody.appendChild(currentRow);
    currentTable.appendChild(currentBody);


    let forecastTable = document.createElement('table');
    let forecastHead = document.createElement('thead');
    let forecastBody = document.createElement('tbody');
    let forecastRow = document.createElement('tr');
    let forecastContext = document.createElement('th');
    forecastContext.textContent = '3-Day Forecast';
    forecastContext.setAttribute('colspan', '3');
    forecastHead.appendChild(forecastContext);
    forecastTable.appendChild(forecastHead);

    for (let i = 0; i < 3; i++) {
        let forecastData = document.createElement('td');
        let icon = document.createElement('img');
        let iconSrc = `https://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;
        let description = forecast.list[i].weather[0].description;
        icon.setAttribute('src', iconSrc);
        icon.setAttribute('alt', description);
        forecastData.appendChild(icon);
        forecastData.innerHTML += `<br>${forecast.list[i].main.temp}°F`;
        forecastRow.appendChild(forecastData);
    }
    forecastBody.appendChild(forecastRow);
    forecastTable.appendChild(forecastBody);
    forecastTable.setAttribute('id', 'forecast');
    currentTable.setAttribute('id', 'current');
    weather.appendChild(currentTable);
    weather.appendChild(forecastTable);
}

apiFetch();
const weather = document.querySelector('.weather-info');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('figcaption');
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
    const heading = document.createElement('h3');
    heading.textContent = 'Current Weather';
    let current = document.querySelector('.current-weather');
    current.textContent = `${data.main.temp}°F`
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let capDescription = data.weather[0].description;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', capDescription);
    description.textContent = `${capDescription}`;
    current.appendChild(heading);
    current.appendChild(currentTemp);
    current.appendChild(weatherIcon);
    current.appendChild(description);


    let weatherForecast = document.querySelector('.weather-forecast');

}

apiFetch();
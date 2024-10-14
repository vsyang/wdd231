const weatherInfo = document.querySelector('.weather-info');
let current = document.querySelector('.current');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('figcaption');
let forecast = document.querySelector('.forecast');
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
    
    let heading = document.querySelector('#current-heading');
    heading.textContent = `Current Weather`;
    currentTemp.textContent = `${Math.round(data.main.temp)}°F`
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let capDescription = data.weather[0].description;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', capDescription);
    description.textContent = `${capDescription}`;
    current.innerHTML = '';
    current.appendChild(heading);
    current.appendChild(currentTemp);
    current.appendChild(weatherIcon);
    current.appendChild(description);


    let weatherForecast = document.querySelector('.weather-forecast');
    let forecastHeader = document.createElement('h3');
    forecastHeader.textContent = `Weather Forecast`;
    weatherForecast.appendChild(forecastHeader);

    let displayedDay = new Set();

    for (let i = 0; i < 3; i++) {
        let forecastData = document.createElement('div');
        let icon = document.createElement('img');
        let iconSource = `https://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;
        let description = forecast.list[i].weather[0].description;
        
        icon.setAttribute('src', iconSource);
        icon.setAttribute('alt', description);
        icon.setAttribute('width', 50);
        icon.setAttribute('height', 50)
        icon.setAttribute('loading', 'lazy');
        forecastData.appendChild(icon);

        forecastData.classList.add('forecast-data')
        
        forecastData.innerHTML += `<br>${Math.round(forecast.list[i].main.temp)}°F`;
        weatherForecast.appendChild(forecastData);
    }
}

apiFetch();
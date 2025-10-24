// This file initializes the application, sets up event listeners, and manages the overall flow of the application.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const locationInput = document.getElementById('location-input');
    const weatherDisplay = document.getElementById('weather-display');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const location = locationInput.value;
        if (location) {
            const weatherData = await fetchWeatherData(location);
            updateWeatherDisplay(weatherData);
        }
    });

    async function fetchWeatherData(location) {
        const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${location.lat}&lon=${location.lon}`, {
            headers: {
                'User-Agent': 'YourAppName/1.0',
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    function updateWeatherDisplay(data) {
        // Assuming data contains the necessary weather information
        weatherDisplay.innerHTML = `
            <h2>Weather in ${data.location.name}</h2>
            <p>Temperature: ${data.properties.timeseries[0].data.instant.details.air_temperature} °C</p>
            <p>Condition: ${data.properties.timeseries[0].data.instant.details.weathercode}</p>
        `;
    }
});
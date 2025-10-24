const api = {
    getWeatherData: async (latitude, longitude) => {
        const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`, {
            headers: {
                'User-Agent': 'YourAppName/1.0 (your.email@example.com)',
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
};

const ui = {
    displayWeather: (data) => {
        const weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `
            <h2>Weather Forecast</h2>
            <p>Location: ${data.properties.meta.name}</p>
            <p>Temperature: ${data.properties.timeseries[0].data.instant.details.air_temperature} °C</p>
            <p>Wind Speed: ${data.properties.timeseries[0].data.instant.details.wind_speed} m/s</p>
        `;
    },
    showError: (message) => {
        const weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `<p class="error">${message}</p>`;
    }
};

document.getElementById('getWeatherButton').addEventListener('click', async () => {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    try {
        const weatherData = await api.getWeatherData(latitude, longitude);
        ui.displayWeather(weatherData);
    } catch (error) {
        ui.showError('Failed to fetch weather data. Please try again.');
    }
});
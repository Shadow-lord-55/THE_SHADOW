const API_URL = 'https://api.met.no/weatherapi/locationforecast/2.0/';

async function fetchWeatherData(latitude, longitude) {
    const response = await fetch(`${API_URL}json?lat=${latitude}&lon=${longitude}`, {
        headers: {
            'User-Agent': 'YourAppName/1.0', // Replace with your app name
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data;
}

export { fetchWeatherData };
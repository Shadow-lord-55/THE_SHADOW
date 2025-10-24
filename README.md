# MET Norway Weather Webpage

This project is a simple web application that utilizes the MET Norway Weather API to display weather forecasts based on user input. The application is structured to provide a clean and interactive user interface for accessing weather data.

## Project Structure

```
metno-weather-webpage
├── public
│   └── index.html        # Main HTML document for the webpage
├── src
│   ├── js
│   │   ├── main.js       # Entry point for JavaScript code
│   │   ├── api.js        # Functions to interact with the MET Norway Weather API
│   │   └── ui.js         # Manages user interface elements
│   └── css
│       └── styles.css    # Styles for the webpage
├── package.json           # Configuration file for npm
├── .gitignore             # Specifies files to be ignored by Git
└── README.md              # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd metno-weather-webpage
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   You can use a local server to serve the `public/index.html` file. For example, you can use `live-server` or any other static file server.

## Usage

- Open the webpage in your browser.
- Enter a location to get the weather forecast.
- The application will display the current weather and forecast data retrieved from the MET Norway Weather API.

## API Information

This project utilizes the MET Norway Weather API for fetching weather data. For more details on the API endpoints and usage, refer to the [MET Norway Weather API Documentation](https://api.met.no/weatherapi/locationforecast/2.0/documentation).

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.
require('dotenv').config();

async function getWeather(city) {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await fetch(url);
        const data = response.json();

        if (!response.ok) {
            throw new Error(response);
        }

        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
}

module.exports = getWeather;
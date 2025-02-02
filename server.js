require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 3000;
const API_KEY = process.env.API_KEY;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null });
});

app.get('/weather', async (req, res) => {
    let city = req.query.city;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        let response = await axios.get(url);
        let weatherData = response.data;
        let weather = {
            city: weatherData.name,
            temp: weatherData.main.temp,
            description: weatherData.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        };
        res.render('index', { weather, error: null });
    } catch (error) {
        res.render('index', { weather: null, error: 'City not found!' });
    }
});

app.listen(PORT, () => console.log(`🌍 Server running on http://localhost:${PORT}`));
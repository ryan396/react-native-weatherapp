import axios from 'axios';

const API_PATH = "http://api.openweathermap.org/data/2.5/forecast?id=";
const API_KEY = "244c4ca6176aa404986b7d49cb9dbfd7"

async function getWeatherForecast(zipCode) {
    const forecast = await axios.get(API_PATH + zipCode + "&appid=" + API_KEY);
    return forecast;
}

export default getWeatherForecast;
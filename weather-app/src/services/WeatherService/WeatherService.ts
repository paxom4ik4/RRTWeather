export default class WeatherService {
  _apiBase = "https://api.openweathermap.org/data/2.5/weather";

  getWeather = async (city = "Minsk") => {
    const url = `${this._apiBase}?q=${city}&lang=en&appid=2af111bb9967d0386a40a1a68e39af9b&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
}

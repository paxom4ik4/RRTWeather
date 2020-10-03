import React, { useState } from "react";
import "./WeatherWindow.css";
import "./owfont-regular.css";
import WeatherService from "../../services/WeatherService/WeatherService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faWater,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";

const WeatherWindow = (): JSX.Element => {
  const [dayTemp, setDayTemp] = useState(0);
  const [nightTemp, setNightTemp] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [iconId, setIconId] = useState("");

  const iconClass = `weather-icon owf owf-${iconId}`;
  const weatherService = new WeatherService();

  let weather = new Promise((resolve, reject) => {
    resolve(weatherService.getWeather());
    reject = () => console.log("Error...");
  });

  weather.then((data: any) => {
    setDayTemp(data.main.temp);
    setNightTemp(data.main.temp_min);
    setWeatherDescription(data.weather[0].main);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setPressure(data.main.pressure);
    setIconId(data.weather[0].id);
  });
  return (
    <div className="weather-window">
      <div className="weather-temperature">
        <div className="current-weather">
          <i className={iconClass}></i>
          <p>{weatherDescription}</p>
        </div>
        <div className="current-temperature">
          <div className="day-temp temp-info">
            <p className="temp">{dayTemp} &#176;</p>
            <div className="dash"></div>
            <p className="temp-time">Current</p>
          </div>
          <div className="night-temp temp-info">
            <p className="temp">{nightTemp} &#176;</p>
            <div className="dash"></div>
            <p className="temp-time">Min Temp</p>
          </div>
        </div>
      </div>
      <div className="extra-info">
        <div className="humidity extra-item">
          <div className="extra-icon">
            <FontAwesomeIcon icon={faWater} className="fextra-icon" />
          </div>
          <p className="extra-type">Humidity</p>
          <div className="exra-dash"></div>
          <p className="extra-value">{humidity}%</p>
        </div>
        <div className="wind extra-item">
          <div className="extra-icon">
            <FontAwesomeIcon icon={faWind} className="fextra-icon" />
          </div>
          <p className="extra-type">Wind</p>
          <div className="exra-dash"></div>
          <p className="extra-value">{wind} m/s</p>
        </div>
        <div className="pressure extra-item">
          <div className="extra-icon">
            <FontAwesomeIcon icon={faTemperatureHigh} className="fextra-icon" />
          </div>
          <p className="extra-type">Pressure</p>
          <div className="exra-dash"></div>
          <p className="extra-value">{pressure}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWindow;

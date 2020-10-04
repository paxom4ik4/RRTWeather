import React from "react";
import "./WeatherWindow.css";
import "./owfont-regular.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faLocationArrow,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";

const WeatherWindow = ({
  iconClass,
  weatherDescription,
  dayTemp,
  nightTemp,
  humidity,
  wind,
  pressure,
}: any): JSX.Element => {
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
            <FontAwesomeIcon icon={faLocationArrow} className="fextra-icon" />
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

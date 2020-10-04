import React, { useState } from "react";
import WeatherWindow from "../WeatherWindow";
import CurrentTime from "../CurrentTime";
import Search from "../Search";
import WeatherService from "../../services/WeatherService/WeatherService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import WeatherMap from "../Map";

const App = (): JSX.Element => {
  const [dayTemp, setDayTemp] = useState(0);
  const [nightTemp, setNightTemp] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [iconId, setIconId] = useState("");

  const iconClass = `weather-icon owf owf-${iconId}`;
  const weatherService = new WeatherService();
  const [isInfo, setInfo] = useState(false);
  const weatherInfo = (city = "Minsk") => {
    let weather = new Promise((resolve, reject) => {
      resolve(weatherService.getWeather(city));
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

    setInfo(!isInfo);
  };
  const [isSearching, setSearching] = useState(false);
  const [currentLocation, setLocation] = useState("Minsk");
  if (!isInfo) {
    weatherInfo(currentLocation);
  }

  const [isMap, switchMap] = useState(false);
  const [appMap, setAppMap] = useState("weather-map");
  let mapPromis: any = new Promise((resolve, reject) => {
    resolve = (): any => switchMap(!isMap);
    reject = () => console.log("Error...");
  });

  const searchHandler = () => {
    setSearching(!isSearching);
  };

  const switchHandler = () => {
    isMap
      ? mapPromis.then(() => {
          setAppMap("weather-map app-map");
          switchMap(!isMap);
        })
      : switchMap(!isMap);
  };

  const searchWeather = (e: any) => {
    setLocation(e.target.value);
  };

  const requestWeather = () => {
    weatherInfo(currentLocation);
  };

  return (
    <div className="app">
      {isMap ? (
        <WeatherMap switchHandler={switchHandler} appMap={appMap} />
      ) : (
        <div className="open-map" onClick={() => switchHandler()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      )}
      <CurrentTime />
      {isSearching ? (
        <div className="search-app-container">
          <div className="search-app-box">
            <input
              value={currentLocation}
              onChange={(e) => searchWeather(e)}
              autoFocus={true}
              className="search-app-input"
              placeholder="search city..."
            ></input>
            <button
              className="search-app-btn"
              onClick={() => {
                requestWeather();
                setSearching(!isSearching);
              }}
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <Search selectHandler={searchHandler} />
      )}
      <WeatherWindow
        iconClass={iconClass}
        weatherDescription={weatherDescription}
        dayTemp={dayTemp}
        nightTemp={nightTemp}
        humidity={humidity}
        wind={wind}
        pressure={pressure}
      />
    </div>
  );
};

export default App;

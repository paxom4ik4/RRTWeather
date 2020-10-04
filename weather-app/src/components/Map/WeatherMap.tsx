import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./WeatherMap.css";

const WeatherMap = ({ switchHandler, appMap }: any) => {
  return (
    <div className="map-container">
      <div className="blured"></div>
      <div className={appMap}>
        <FontAwesomeIcon
          icon={faTimes}
          className="close-item"
          onClick={() => switchHandler()}
        />
        <YMaps>
          <div style={{ borderRadius: "3%", overflow: "hidden" }}>
            <Map
              width={720}
              height={850}
              defaultState={{ center: [53.893009, 27.567444], zoom: 11 }}
            />
          </div>
        </YMaps>
      </div>
    </div>
  );
};

export default WeatherMap;

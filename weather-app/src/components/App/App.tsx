import React from "react";
import WeatherWindow from "../WeatherWindow";
import CurrentTime from "./CurrentTime";
import Search from "./Search";

import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <CurrentTime />
      <Search />
      <WeatherWindow />
    </div>
  );
};

export default App;

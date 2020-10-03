import React, { useState } from "react";
import WeatherWindow from "../WeatherWindow";
import CurrentTime from "../CurrentTime";
import Search from "../Search";
import NameInput from "../NameInput";

import "./App.css";
import Quote from "../Quote";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <CurrentTime />
      {/* <Search /> */} 
      <WeatherWindow />
    </div>
  );
};

export default App;

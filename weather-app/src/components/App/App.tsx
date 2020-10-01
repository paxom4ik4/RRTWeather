import React, { useState } from "react";
import WeatherWindow from "../WeatherWindow";
import CurrentTime from "../CurrentTime";
import Search from "../Search";
import NameInput from "../NameInput";

import "./App.css";
import Quote from "../Quote";

const App = (): JSX.Element => {
  const [name, setName] = useState("User Name");
  const [isChanging, change] = useState(false);

  const changeName = () => {
    change(!isChanging);
  };

  const updateName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  function submitName() {
    change(!isChanging);
  }

  return (
    <div className="app">
      <CurrentTime />
      <Search />
      {isChanging ? (
        <NameInput updName={updateName} submitName={submitName} />
      ) : (
        <Quote userName={name} changeName={changeName} />
      )}
      <WeatherWindow />
    </div>
  );
};

export default App;

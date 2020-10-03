import React, { useState } from "react";
import NameInput from "../NameInput";
import Quote from "../Quote";
import "./CurrentTime.css";

const CurrentTime = (): JSX.Element => {
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

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [currentDate, setDate] = useState("");
  const [mounth, setMounth] = useState("");

  const getTime = () => {
    const date = new Date();
    const hours: string = String(date.getHours());
    const minutes: string = String(date.getMinutes());
    const seconds: string = String(date.getSeconds());
    if (+hours < 10) {
      setHours("0" + hours);
    } else {
      setHours(hours);
    }
    if (+minutes < 10) {
      setMinutes("0" + minutes);
    } else {
      setMinutes(minutes);
    }
    if (+seconds < 10) {
      setSeconds("0" + seconds);
    } else {
      setSeconds(seconds);
    }
    const mounth: string = String(date.getMonth());
    const currentDate: string = String(date.getDate());
    setDate(currentDate);
    switch (Number(mounth)) {
      case 0: {
        setMounth("January");
        break;
      }
      case 1: {
        setMounth("February");
        break;
      }
      case 2: {
        setMounth("March");
        break;
      }
      case 3: {
        setMounth("April");
        break;
      }
      case 4: {
        setMounth("May");
        break;
      }
      case 5: {
        setMounth("June");
        break;
      }
      case 6: {
        setMounth("July");
        break;
      }
      case 7: {
        setMounth("August");
        break;
      }
      case 8: {
        setMounth("September");
        break;
      }
      case 9: {
        setMounth("October");
        break;
      }
      case 10: {
        setMounth("November");
        break;
      }
      case 11: {
        setMounth("December");
        break;
      }
    }
  };

  setTimeout(getTime, 1000);

  return (
    <div className="current-time">
      <div className="qoute-time">
        {isChanging ? (
          <NameInput updName={updateName} submitName={submitName} />
        ) : (
          <Quote userName={name} changeName={changeName} />
        )}
      </div>
      <div className="time">
        {hours}:{minutes}, {mounth} {currentDate}
      </div>
    </div>
  );
};

export default CurrentTime;

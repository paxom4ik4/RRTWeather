import React, { useState } from "react";
import "./CurrentTime.css";

const CurrentTime = (): JSX.Element => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const getTime = () => {
    const hours: string = String(new Date().getHours());
    const minutes: string = String(new Date().getMinutes());
    const seconds: string = String(new Date().getSeconds());
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
  };

  setTimeout(getTime, 1000);

  return (
    <div className="current-time">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default CurrentTime;

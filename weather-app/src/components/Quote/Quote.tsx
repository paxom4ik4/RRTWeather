import React from "react";
import "./Quote.css";

const Quote = (props: { userName: React.ReactNode; changeName: () => void; }) => {
  return (
    <div className="quote-container">
      <div>
        <p className="user-name">Have a nice day, {props.userName}</p>
      </div>
      <div>
        <button className="change-name" onClick={() => props.changeName()}>
          Change Name
        </button>
      </div>
    </div>
  );
};

export default Quote;

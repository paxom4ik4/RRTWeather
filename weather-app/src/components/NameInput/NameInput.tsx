import React from "react";
import "./NameInput.css";

const NameInput = (props: {
  submitName: () => void;
  updName: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="name-input">
      <p>Input Your Name</p>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => props.updName(e)}
      />
      <button className="submit-name" onClick={() => props.submitName()}>
        Submit
      </button>
    </div>
  );
};

export default NameInput;

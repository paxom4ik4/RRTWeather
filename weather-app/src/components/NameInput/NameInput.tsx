import React from "react";
import "./NameInput.css";

const NameInput = (props: {
  submitName: () => void;
  updName: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="name-input">
      <input autoFocus={true} type="text" onChange={(e) => props.updName(e)} />
      <button className="submit-name" onClick={() => props.submitName()}>
        Submit
      </button>
    </div>
  );
};

export default NameInput;

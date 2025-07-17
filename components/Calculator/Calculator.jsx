import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState();
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => (prevInput ? prevInput + value : value));
  };


  const calculate = () => {

  };

  const clear = () => {
    setInput(0);
  };


  
  return (
    <div className="container">
      <h1>Calculator</h1>
        <input
        type="text"
        className="result"
        value={input}
        // onChange={handleInputChange}
        // onKeyPress={handleKeyPress}
      />
      <div className="buttons">
        {["7", "8", "9", "/"].map((value) => (
          <button
          className="buttonStyle"
            key={value}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <button
          className="buttonStyle"
            key={value}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <button
          className="buttonStyle"
            key={value}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}
        {["0", ".", "=", "+"].map((value) => (
          <button
          className="buttonStyle"
            key={value}
            onClick={value === "=" ? calculate : () => handleClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <button className="clearButton" onClick={clear}>
          Clear
      </button>
    </div>
  );
};

export default Calculator;

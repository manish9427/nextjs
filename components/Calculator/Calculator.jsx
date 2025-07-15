import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
  };

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };
  
  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="inputField">
        <input type="text" value={input} />
      </div>
      <div className="result">Result:{input}</div>
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
    </div>
  );
};

export default Calculator;

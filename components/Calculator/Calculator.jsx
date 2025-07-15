import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const buttonStyle = {
    padding: "15px",
    fontSize: "18px",
    cursor: "pointer",
    border: "1px solid #ccc",
    background: "#f9f9f9",
    borderRadius: "5px",
  };

  const calculate = () => {
    try {
      const calcResult = eval(input);
      setResult(calcResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };
  return (
    <div className="container">
      <h1>Calculator</h1>
      <div>
        <input type="text" value={input} />
      </div>
      <div>Result:{input}</div>
      <div className="buttons">
        {["7", "8", "9", "/"].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            style={buttonStyle}
          >
            {value}
          </button>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            style={buttonStyle}
          >
            {value}
          </button>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            style={buttonStyle}
          >
            {value}
          </button>
        ))}
        {["0", ".", "=", "+"].map((value) => (
          <button
            key={value}
            onClick={value === "=" ? calculate : () => handleClick(value)}
            style={buttonStyle}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

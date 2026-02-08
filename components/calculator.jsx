"use client";

import React, { useState } from "react";
import "../styles/calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => (prevInput ? prevInput + value : value));
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  const back = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

    const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calculate();
    }
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <input
        type="text"
        className="result"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="0"
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
      <div className="buttonContainers">
        <button className="clearButton" onClick={clear}>
          Clear
        </button>
        <button className="backButton" onClick={back}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Calculator;

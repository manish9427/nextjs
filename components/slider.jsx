"use client";

import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div >
      <h2 >
        Slider Value: {value}
      </h2>
      <input
        type="range"
        // min="0"
        // max="100"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
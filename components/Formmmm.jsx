import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [isTrue, setIsTrue] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value); // Corrected: Use event.target.value
    setIsTrue(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Form</h1>
      <p>{!isTrue ? 'Name' : name}</p>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Form;

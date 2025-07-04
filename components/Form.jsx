import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setButtonText('Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ textAlign: 'center' }}>
        <h1>Form</h1>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

export default Form;

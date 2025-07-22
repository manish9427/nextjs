import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [isTrue, setIsTrue] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText("Submitted");
    setIsTrue(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
        <h1>Form</h1>
        <p>{!isTrue ? "Name" : name}</p>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => 
            setName(e.target.value)
          }
        />
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

export default Form;

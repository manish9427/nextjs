import React, { useState } from "react";

const practice = () => {
  const [item, setItem] = useState([]);
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleAddItem = () => {
    if (value !== "") {
      setItem([...item, value]);
      setValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleEdit = (index) => {
    const newValue = prompt("Add new Value", item[index]);
    if (newValue !== "" && newValue !== null) {
      const updatedValue = [...item];
      updatedValue[index] = newValue;
      setItem(updatedValue);
    }
  };

  const handleRemove = (index) => {
    const updatedValue = item.filter((_, i) => i !== index);
    setItem(updatedValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Item"
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddItem}>Add Item</button>

      <div>
        <p>Input Values</p>
        <pre key={item.index}>{JSON.stringify(item)}</pre>
        {item.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default practice;

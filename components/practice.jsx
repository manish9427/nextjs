import React, { useState } from "react";

const practice = () => {
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if (inputValue.trim()) {
      setItem([...item, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleEdit = (id) => {
    const newValue = prompt("Enter new value", item[id]);
    if (newValue !== null && newValue.trim()) {
      const updatedItems = item.map((itm, index) =>
        index === id ? newValue.trim() : itm
      );
      setItem(updatedItems);
    }
  };

  const handleDelete = (id) =>{
    setItem(item.filter((_,index) => index !== id));
  }


  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add Item"
          value={inputValue}
          onChange={handleInput}
          onKeyPress={(e) => {
            if (e.key === "Enter") addItem();
          }}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <p>Item List</p>
        {item.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button onClick={()=>handleEdit(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default practice;

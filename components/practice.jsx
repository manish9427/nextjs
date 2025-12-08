import React, { useState } from "react";

const practice = () => {
  const [item, setItem] = useState([]);
  const [value, setValue] = useState("");
  const addValue = (e) => {
    setValue(e.target.value);
  };
  const addItem = () => {
    setItem([...item, value]);
    setValue("");
  };

  const handleEdit = (index)=>{
    const newItem = prompt("Add Item", item[index])
    const updateItem = [...item]
    updateItem[index] = newItem
    setItem(updateItem)
  }

  const handleRemove = (index)=>{
    const updateItem = item.filter((_,i)=>i!== index)
    setItem(updateItem)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Add item"
        value={value}
        onChange={addValue}
      />
      <button onClick={addItem}>Add Item</button>
      <h1>Item list</h1>
      {item.length === 0 ? 
        "Array is Empty"
       : 
        <div>
          {item.map((item, index) => (
            <div id={index}>
              <span>{item}</span>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>handleRemove(index)}>Remove</button>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default practice;

import React, { useState } from "react";

const practice = () => {
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if(!inputValue.trim()) return ;
    setItem([...item, inputValue]);
    setInputValue("");
  };

  const handleEdit = (index) =>{
    const newInput = prompt("Edit Item", item[index])
    const updateditem = [...item]
    updateditem[index] = newInput
    setItem(updateditem)
  }

   const handleRemove = (index) => {
    const updateItem = item.filter((_,i)=>i!==index)
    setItem(updateItem)
   }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add item"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
        />
        <button onClick={addItem}>Add item</button>
      </div>

      <div>
        <p>List of Item</p>
        {
          item.map((item,index)=>(
            <div key={index}>
              <span>{item}</span>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>handleRemove(index)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default practice;

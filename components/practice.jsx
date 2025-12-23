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

  const handleEdit =(index) =>{
    const newValue = prompt('Add New Value', item[index])
    if(newValue!==null && newValue!==""){

      const updatedValue = [...item]
      updatedValue[index] = newValue
      setItem(updatedValue) 
    }
  }

  const handleRemove = (index)=>{
    const updatedValue = item.filter((_,i)=>i!==index)
    setItem(updatedValue)
  }

  const hanldeKeyDown = (e)=>{
    if(e.key === 'Enter'){
      handleAddItem();
    }
  }



  return (
    <div>
      <input
        type="text"
        placeholder="Add item"
        value={value}
        onChange={handleInput}
        onKeyDown={hanldeKeyDown}
      />
      <button onClick={handleAddItem}>Add Item</button>

      <div>
        <p>List Added Item</p>
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

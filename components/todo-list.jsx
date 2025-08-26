import React, { useState } from 'react';
const TodoList = () => {
  const [item,setitem] = useState([]);

  const addItem =() =>{
    const input = document.querySelector('input[type=text]');
    if (input.value.trim() === '') {
      alert('Please enter a valid item.');
      return;
    }
    setitem([ ...item,input.value]);
    input.value = ''; 
  }

  return (
    <div className="todo-list">
      <div>
        <h1>Add Item</h1>
        <input type="text" />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div>
        <h1>Item List</h1>
        <ul style={{ listStyleType:"none" , padding: "5px" }}>
          {
            item.length>0 ? item.map((value,index)=>(
              <li key={index}>{value}</li>
            )) : (
              <li>Empty</li>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

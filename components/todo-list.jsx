// import React, { useState } from 'react';
// import '../styles/todo-list.css';
// const TodoList = () => {
//   const [item,setitem] = useState([]);

//   const addItem =() =>{
//     const input = document.querySelector('input[type=text]');
//     if (input.value.trim() === '') {
//       alert('Please enter a valid item.');
//       return;
//     }
//     setitem([ ...item,input.value]);
//     input.value = ''; 
//   }

//   return (
//     <>
//       <div className="todo-list">
//         <h1>Add Item</h1>
//         <input type="text" />
//         <button onClick={addItem}>Add Item</button>
//       </div>
//       <div className="item-list">
//         <h1>Item List</h1>
//         <ul >
//           {
//             item.length>0 ? item.map((value,index)=>(
//               <li key={index}>{value}</li>
//             )) : (
//               <li>Empty</li>
//             )
//           }
//         </ul>
//       </div>
//     </>
//   );
// };

// export default TodoList;


import React, { useState } from 'react';
import styles from '../styles/todo-list.css';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      alert('Please enter a valid item.');
      return;
    }
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div >
      <div className="todo-list">
        <h1>Add Item</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="item-list">
        <h1>Item List</h1>
        <ul >
          {items.length > 0 ? (
            items.map((value, index) => <li key={index}>{value}</li>)
          ) : (
            <li>Empty</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;


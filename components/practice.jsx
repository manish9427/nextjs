import React,{useState} from 'react'

const practice = () => {
  const [item,setItem] = useState([]);
  const [inputValue,setInputValue] = useState('');

  const handleInput =(e)=>{
    setInputValue(e.target.value)
  }

  const addItem = () => {
    setItem([...item,inputValue]);
    setInputValue('');
  }

  const handleEdit = (index) =>{
    const newInput = prompt('Add the Value', item[index])
    const updatedItems = [...item];
    updatedItems[index] = newInput;
    setItem(updatedItems);
  }

  const handleRemove = (index) =>{
    const updatedItems = item.filter((_, i) => i !== index);
    setItem(updatedItems);
  }

  
  return (
    <div>
      <div>
      <input type="text" placeholder='Add item' value={inputValue} onChange={handleInput}/>
      <button onClick={addItem}>Add Item</button>

      </div>
      <div>
        <p>Item List</p>
        {
          item.map((item,index)=>(
            <div key={item.index}>
              <span>{item}</span>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>handleRemove(index)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default practice
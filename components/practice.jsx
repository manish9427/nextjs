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
            <pre key={item.index}>{item}</pre>
          ))
        }
      </div>
    </div>
  )
}

export default practice
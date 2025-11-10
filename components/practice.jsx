import React,{useState} from 'react'

const practice = () => {
  const [item,setitem] = useState([]);
  const [inputValue,setInputvalue] = useState('');

  const handleInput = (e) =>{
    setInputvalue(e.target.value)
  }

  const addItem = () => {
    if(inputValue.trim()){
      setitem([...item,inputValue.trim()]);
      setInputvalue('');
    }
  }
  return (
    <div>
      <div>
        <input type="text" placeholder='Add Item' value={inputValue} onChange={handleInput} />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div>
        <p>Item List</p>
        {
          item.map((item,index)=>(
            <p key={index}>{item}</p>
          ))
        }
      </div>
    </div>
  )
}

export default practice
import React,{useState} from 'react'

const practice = () => {
  const [item,setItem]=useState([])
  const [inputValue,setInputValue] = useState('');
  const handleInput = (e) =>{
    setInputValue(e.target.value)
  }

  const addItem =()=>{
    if(inputValue.trim()){
      setItem([...item,inputValue.trim()])
      setInputValue('')
    }
  }
  return (
    <div>
      <div>
        <input type="text" placeholder='Add Item' value={inputValue} onChange={handleInput}   />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <p>Item List</p>
        {
          item.map((item,index)=>(
            <div key={index}>
              <span>{item}</span>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default practice
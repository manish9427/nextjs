import React,{useState} from 'react'

const practice = () => {
  const [item,setItem] = useState([]);
  const [value, setvalue] = useState('')

  const handleInput = (e) => {
    setvalue(e.target.value)
  }

  const addItem = () => {
    setItem([...item,value])
    setvalue('');
  }

  const handleEdit =(index)=>{
    const newValue = prompt("Add new Value", item[index])
    const updatedValue = [...item]
    updatedValue[index] = newValue
    setItem(updatedValue)
  }

  const handleRemove =(index)=>{
    const updatedValue = item.filter((_,i)=>i!==index)
    setItem(updatedValue)
  }
  return (
    <div>
      <input type="text" placeholder='Add item' value={value} onChange={handleInput} />
      <button onClick={addItem}>Add Item</button>
      <div>
        <p>Item List</p>
        {
          item.map((item,index)=>(
            <div>
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
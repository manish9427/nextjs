import React,{useState} from 'react'

const practice = () => {
  const [item,setItem] = useState([]);
  const [value,setValue] = useState('');
  const addValue = (e) => {
    setValue(e.target.value);
  }

  const addItem = () =>{
    setItem([...item,value])
    setValue('')
  }

  const handleEdit =(index) => {
    const newValue = prompt("Add Value", item[index])
    const updateValue = [...item]
    updateValue[index] = newValue
    setItem(updateValue)
  }

  const handleRemove = (index)=>{
    const updateValue = item.filter((_,i)=>i!==index)
    setItem(updateValue)
  }
  return (
    <div>
      <input type="text" placeholder='Add item' value={value} onChange={addValue} />
      <button onClick={addItem}>Add Item</button>
      <div>
        {
          item.map((item,index)=>(
            <div id={item.index}>
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
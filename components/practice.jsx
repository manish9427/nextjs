import React, { useState,useEffect } from 'react'

const practice = () => {
  const [data,setData]  = useState([]);
  const [page,setPage] = useState(1);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setData(data);
    })
  },[])
  const dataPerPage = 5;
  const totalPage = Math.ceil(data.length/dataPerPage)
  const lastIndex = page*dataPerPage // 1*5 = 5
  const firstIndex = lastIndex - dataPerPage; // 5 - 5 = 0
  const currentData = data.slice(firstIndex,lastIndex)

  const handleIncrement = () => {
    if(page<totalPage){
      setPage(prev => prev+1)
    }
  }
  const handleDecrement = () => {
    if(page>1){
      setPage(prev => prev-1 )
    }
  }
  return (
    <div>
      {/* <pre id={data.id}>{JSON.stringify(data,null,2)}</pre> */}
      {
        currentData.map((item)=>(
          <pre id={item.id}>{item.title}</pre>
        ))
      }
      <button onClick={handleIncrement}>+</button>
      <span>{page}/{totalPage}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default practice
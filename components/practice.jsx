import React,{useState,useEffect} from 'react'

const practice = () => {
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(json=>{
      setData(json)
    })
  })
  const dataPerPage = 5;
  const lastIndex = page*dataPerPage
  const firstIndex = lastIndex - dataPerPage;
  const currentData = data.slice(firstIndex,lastIndex)
  const totalPage = Math.ceil(data.length/dataPerPage)

  const handleIncrement = () =>{
    if(page<totalPage)
    setPage(prev=>prev+1)
  }
  const handleDecrement = () =>{
    if(page>1){
      setPage(prev=>prev-1)
    }
  }
  return (
    <div>
      {/* <pre key={data.id}>{JSON.stringify(data,null,2)}</pre> */}
      {
        currentData.map((item)=>(
          <pre key={item.id}>{item.title}</pre>
        ))
      }
      <button onClick={handleIncrement}>+</button>
      <span>{page}/{totalPage}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default practice 
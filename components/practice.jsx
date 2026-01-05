import React,{useEffect,useState} from 'react'

const practice = () => {
  const [data,setData]  = useState([])
  const [page,setPage] = useState(1)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(json=>{setData(json)
      console.log(json)
    })
  },[])

  const dataPerPage = 10;
  const totalPage = Math.ceil(data.length/ dataPerPage)

  const lastIndex = dataPerPage*page
  const firstIndex = lastIndex - dataPerPage
  const currentData = data.slice(firstIndex,lastIndex)

  const handleIncrement = () =>{
    if(page<totalPage){
      setPage(prev=>prev+1)
    }
  }

  const handleDecrement = () =>{
    if(page>1){
      setPage(prev => prev-1)
    }
  }

  return (
    <div>
      {
        currentData.map((item)=>(
          <div key={item.id}>

          {item.title}
          </div>
        ))
      }
      <button onClick={handleIncrement}>+</button>
      <span>{page}/{totalPage}</span>
      <button onClick={handleDecrement}>-</button>

    </div>
  )
}

export default practice
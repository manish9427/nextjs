import React,{useState,useEffect} from 'react'

const practice = () => {
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json()).then(data=>setData(data))
  },[])

  console.log("data",data)

  const perPage = 5;
  const totalPage = Math.ceil(data.length/perPage)
  console.log("totalPage",totalPage)
  const lastIndex = page*perPage;
  const firstIndex = lastIndex - perPage;
  const currentData = data.slice(firstIndex,lastIndex) 
  console.log("currentData",currentData)

  const handleIncrement = () => {
    if(page<totalPage){
      setPage(prev=> prev+1)
    }
  }

    const handleDecrement = () => {
    if(page>1){
      setPage(prev => prev-1)
    }
  }

  return (
    <div>
      {/* <pre key={data.id}>{JSON.stringify(data,null,2)}</pre> */}
      {
        currentData.map((item,index)=>(
          <div key={index}>
            <pre>{item.title}</pre>
          </div> 
        ))
      }
      <div>
        <button onClick={handleIncrement}>+</button>
        <span>{page}/{totalPage}</span>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
}

export default practice
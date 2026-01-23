import { useEffect,useState } from "react"

const practice = () => {
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(json => {
      console.log(json)
      setData(json)
    }
    )
  },[])

  const dataPerPage = 10;
  const totalPage = Math.ceil(data.length/dataPerPage)
  const lastIndex = dataPerPage*page; // 10*1 = 0 , 10*2=20
  const firstIndex = lastIndex-dataPerPage //10-10 = 0, 20-10=10
  const currentData = data.slice(firstIndex,lastIndex) //0 , 10

  const handleIncrement = () =>{
    if(page<totalPage){
      setPage(prev => prev+1)
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
          <p>{item.title}</p>
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
import React,{useEffect,useState} from 'react'

const practice = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then(data => {
      setData(data)
      console.log(data)
    })
  },[])
  return (
    // <pre key={data.id}>{JSON.stringify(data,null,2)}</pre>
    <div>

      {
        data.map((item,index)=>(
          <pre key={item.index}>
            {item.title}
          </pre>
        ))
      }
    </div>
  )
}

export default practice
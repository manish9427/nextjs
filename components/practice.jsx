import React,{useState,useEffect} from 'react'

const Practice = ({parentData, setParentData}) => {

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(json=> setParentData(json))
    },[setParentData])

    console.log(parentData)
  return (
    <div>{parentData.map((item,index)=>(
        <pre key={item.id}>{JSON.stringify(item.title)}</pre>
    ))}</div>
  )
}

const ParentComponent = () =>{
    const [parentData,setParentData] = useState([]);
    return(
        <div>
            <Practice parentData={parentData} setParentData={setParentData}/>
        </div>
    )
}
  
export default ParentComponent
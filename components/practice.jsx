import React,{useState,useEffect} from 'react'

const Practice = ({setState}) => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => setState(json))
    },[setState])
  return (
    <div>practice</div>
  )
}

const ParentComponent = () => {
    const [state,setState] = useState([]);
    return(
        <>
                <Practice setState={setState}/>
        {
            state.map((item,index)=>(
                <p key={item.id || index}>{JSON.stringify(item)}</p>
            ))
        }
        </>

    )
}

export default ParentComponent


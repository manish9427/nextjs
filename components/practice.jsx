import React,{useEffect, useState} from 'react'

const name = ["How are you?","I am fine","What about you?","I am good too","Let's code something new"]
const Practice = () => {
    const [data,setData] = useState(name)
    const [user,setUser] = useState([])
    const divStyle = {
        boxShadow:"0px 0px 10px black",
        width : "50%",
        margin:"50px auto",
        padding:"20px",
        // textAlign:"center"
    }
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then ((json)=>{

            setUser(json)
        }
        )

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res)=>res.json())
    //     .then ((json)=>{
    //         // setData(json)
    //         const titles = json.map(item => item.title);
    //         setUser(titles);
    //     })
    // })

  return (
    <div style={divStyle}>
    {user.map((item,index)=>(
        <h1 key={index}>{item.title}</h1>
    ))
    }
    </div>
  )
}

export default Practice
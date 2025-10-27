import React,{useState} from 'react'

const name = ["Manish","Verma","is","a","developer"]
const Practice = () => {
    const [data,setData] = useState(name)
    const divStyle = {
        boxShadow:"0px 0px 10px black",
        width : "50%",
        margin:"50px auto",
        padding:"20px",
        // textAlign:"center"
    }

    const apidata = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json))      
    }
    apidata();
  return (
    <div style={divStyle}>
    {data.map((item,index)=>(
        <h1 key={index}>{item}</h1>
    ))
    }
    </div>
  )
}

export default Practice
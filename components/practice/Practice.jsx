"use client"

import React,{useState,useEffect} from 'react'

const Practice = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
      setData(json.products)
      console.log(json)
    } )
  },[])

  const style = {
    img : {
      width:'30px',
      height:'30px',
    }
  }
  return (
    <div>
    {
      data.map( (item) =>(
        <div key={item.id}>
        <p>{item.title}</p>
        <img style={style.img} src={item.images[0]}/>
        </div>
      )
      )
    }
    </div>
  )
}

export default Practice
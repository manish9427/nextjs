"use client";

import React,{useState,useEffect} from 'react'

const Practice = () => {

  const [todo, setTodo] = useState([])
    useEffect(()=>{
      const fetchTodos = async() =>{

        const res= await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await res.json()
        setTodo(data)
      }
      fetchTodos()
    },[])
  return (
    <pre>{JSON.stringify(todo,null,2)}</pre>
  )
}

export default Practice
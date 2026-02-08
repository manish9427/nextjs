"use client";

import React, { useState } from 'react';

function DropDown() {
  const [selectedOption,setSelectedOption] =useState("")
  const [data,setData] = useState([])

  const handleSubmit = () =>{
      setData((prev)=>{
        if(prev.length ===0){
          return [[selectedOption]]
        }

        const lastData = prev[prev.length-1];
        const lastType = lastData[0]

        if(lastType === selectedOption){
          const updated = [...prev]
          updated[updated.length-1]=[...lastData,selectedOption]
          return updated
        }else{
          return[...prev,[selectedOption]]
        }
      })


  }
  return (
    <div>
    <select
    value={selectedOption}
    onChange={(e)=>setSelectedOption(e.target.value)}
    >
      <option value="Head">Head</option>
      <option value="Tail">Tail</option>
    </select>
      <button onClick={handleSubmit}>Submit</button>

      <div style={{display:"flex",marginTop:"20px"}}>
        {
          data.map((item,index)=>(
            <div key={index} style={{marginRight:"30px"}}>{
              item.map((itm,i)=>(
              <div key={i}>{itm}</div>
              ))
            }
              </div>
          ))
        }
      </div>
    </div>
  
  );
}

export default DropDown;
import React,{useState,useEffect} from 'react'

// Child component must be capitalized so React treats it as a component
const Practice = ({state}) => {
    const [user,setUser]=useState([]);
    const [page,setPage]=useState(1);

    const userPerPage = 2;

    const indexOfLastUser = page * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{setUser(data)
            console.log(data)
        })
    },[state])
  return (
    <div>
        {
        currentUsers.map((item,index)=>(
            <p key={index}>{item.name}</p>
        ))
        }
        <p>{state}</p>
    </div>
  )
}

const ParentComponent = () => {
    const [state,setState] = useState(0);

    return (
        <div>
            <Practice state={state}/>
            <button onClick={()=>setState(state+1)}>Update State</button>
        </div>
    )
}

export default ParentComponent




import React,{useState,useEffect} from 'react'

// Child component must be capitalized so React treats it as a component
const Practice = ({state}) => {
    const [user,setUser]=useState([]);
    const [page,setPage]=useState(1);

    const userPerPage = 2;

    const indexOfLastUser = page * userPerPage;  //2*1=2
    const indexOfFirstUser = indexOfLastUser - userPerPage; // 2-2=0
    const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser); // 0,2

    // total pages based on fetched users
    const maxPage = Math.max(1, Math.ceil(user.length / userPerPage)); // e.g. 10 users, 2 per page => 5 pages

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{setUser(data)
            console.log(data)
        })
    },[])

    // Use functional updates and guard against going out of bounds
    const increment = () => {
        setPage((p) => Math.min(p + 1, maxPage));
    }

    const decrement = () => {
        setPage((p) => Math.max(p - 1, 1));
    }

  return (
    <div>
        {
        currentUsers.map((item)=>(
            <p key={item.id ?? item.name}>{item.name}</p>
        ))
        }
        <p>{state}</p>
        <button onClick={decrement} disabled={page <= 1}>-</button>
        <span style={{padding: '0 8px'}}>Page {page} / {maxPage}</span>
        <button onClick={increment} disabled={page >= maxPage}>+</button>
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




import React,{useState,useEffect} from 'react'

// Child component: receives a message from parent via `parentMessage`
// and accepts an `onData` callback to send data back to the parent.
const Practice = ({ parentMessage, onData }) => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            setData(json)
            // send the full fetched data to parent (child -> parent)
            if (typeof onData === 'function') onData(json);
        })
        .catch(err => {
            console.error('fetch error', err);
            if (typeof onData === 'function') onData(null, err);
        })
    },[])

  return (
    <div>
      <p>data from parent: {parentMessage}</p>
        {/* {
            data.map((item)=>(
                <p key={item.id}>{item.title}</p>
            ))
        } */}
    </div>
  )
}

// Parent component: passes a message and a callback to the child
const ParentComponent = () =>{
    const  state = "Hello from parent component"
    const [childData, setChildData] = useState(null);

    return (
        <div>
            <Practice parentMessage={state} onData={setChildData} />
            <div style={{marginTop: 16}}>
                <strong>Data received from child:</strong>
                <pre style={{whiteSpace: 'pre-wrap', maxHeight: 200, overflow: 'auto'}}>
                    {childData ? JSON.stringify(childData.slice?.(0,5) ?? childData, null, 2) : 'No data yet'}
                </pre>
            </div>
        </div>
    )
}

export default ParentComponent
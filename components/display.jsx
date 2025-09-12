import { useEffect, useState } from "react";
export default function Display() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return (
    <div>
      {/* <h1 >{data[0].title}</h1> */}
      {/* <h1>{JSON.stringify(data)}</h1> */}
      {/* {data.map((item)=>(<p key={item.id}>{item.title}</p>))} */}
    </div>
  );
}

import react, { useState, useEffect } from "react";

const Practice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);
  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {
        data.map((item)=>(
          <div key={item.id}>{item.title}</div>
        ))
      }
    </>
  );
};

export default Practice;

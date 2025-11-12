import React, { useEffect, useState } from "react";

const practice = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const dataPerPage = 5;

  const totalPage = Math.ceil(data.length / dataPerPage);
  const lastIndex = page * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const currentData = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleIncrement = () => {
    if(lastIndex<data.length)
    setPage(prev => prev+1)
  }

  const handleDecrement =() => {
    if(page>1){
      setPage(prev => prev-1)
    }
  }

  console.log(data);
  return (
    <div>
      <h1>Data</h1>
      <div>
      {/* <pre key={currentData.id}>{JSON.stringify(data,null,2)}</pre> */}
        {currentData.map((item) => (
          <pre key={item.id}>{item.title}</pre>
        ))}
      </div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <span>{page}/{totalPage}</span>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default practice;

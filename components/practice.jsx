import React, { useState, useEffect, use } from "react";

const Practice = ({ parentData, setParentData }) => {
  const [page, setPage] = useState(1);
  const userPerPage = 5;

  const totalPages = Math.ceil(parentData.length/userPerPage);
  const lastIndex = page * userPerPage;
  const firstIndex = lastIndex - userPerPage;
  const users = parentData.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setParentData(json));
  }, [setParentData]);

  const incrementPage = () =>{
    if(page<totalPages){
      setPage(prevPage => prevPage+1);
    }
  }

    const decrementPage = () =>{
    if(page>1){
      setPage(prevPage => prevPage-1);
    }
  }

  console.log(parentData);
  return (
    <div>
      <div>
        {users.map((item, index) => (
          <pre key={item.id}>{JSON.stringify(item.title)}</pre>
        ))}
      </div>
      <button onClick= {incrementPage}>+</button>
      <span>{page}</span>
      <button onClick={decrementPage}>-</button>
    </div>
  );
};

const ParentComponent = () => {
  const [parentData, setParentData] = useState([]);
  return (
    <div>
      <Practice parentData={parentData} setParentData={setParentData} />
    </div>
  );
};

export default ParentComponent;

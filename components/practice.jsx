import React, { useState } from "react";

const practice = () => {
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const addItem = () => {
    setItem([...item, inputValue]);
    setInputValue("");
  };

  const handleEdit =(index)=>{
    const newInput = prompt("Edit item:", item[index]);
        if (newInput) {
      const updatedItems = [...item];
      updatedItems[index] = newInput;
      setItem(updatedItems);
    }
  }

  const handleDelete =(index)=>{
    const updatedItems = item.filter((_, i) => i !== index);
    setItem(updatedItems);
  }

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div>
        <p>Added Item</p>
        {item.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button onClick={()=>handleEdit(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default practice;

// import React, { useState, useEffect } from "react";

// const practice = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const dataPerPage = 5;

//   const totalPage = Math.ceil(data.length / dataPerPage);
//   const lastIndex = page * dataPerPage;
//   const firstIndex = lastIndex - dataPerPage;
//   const currentPage = data.slice(firstIndex, lastIndex);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   const handleIncrement = () => {
//     if (lastIndex < data.length) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (page > 1) {
//       setPage((prev) => prev - 1);
//     }
//   };

//   return (
//     // <pre key={data.id}>{JSON.stringify(data,null,2)}</pre>
//     <div>
//       <div>
//         {currentPage.map((item, index) => (
//           <pre key={index}>{item.title}</pre>
//         ))}
//       </div>
//       <div>
//         <button onClick={handleIncrement}>+</button>
//         <span>
//           {page}/{totalPage}
//         </span>
//         <button onClick={handleDecrement}>-</button>
//       </div>
//     </div>
//   );
// };

// export default practice;

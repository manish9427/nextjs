import React, { useState } from "react";

const practice = () => {
  const [item, setItem] = useState([]);
  const [inputValue,setInputValue] = useState('');

  return (
    <div>
      {/* <input type="text" placeholder="Add Item" value={inputValue} onChange={setInputValue((e)=>e.target.value)} onKeyDown={(e)=>e.key === 'Enter' && setItem()} /> */}
      <div>
        {item.length>0?item:"No Item Found"}
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

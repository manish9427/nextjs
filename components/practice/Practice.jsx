"use client";

import React, { useEffect, useState } from "react";

const Practice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        console.log(data);
      });
  }, []);

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default Practice;

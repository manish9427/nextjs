import { useEffect, useState } from "react";
export default function Display() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [valueList, setValueList] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    // e.preventDefault();
    // alert(`Hello, ${value}!`);
    // // setValue("");

    if (value.trim()) {
      setValueList([...valueList, value]);
      setValue("");
    }else{
      alert("Please enter a valid name.");
    }
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return (
    <div>
      <h1>Display Component</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter Name"
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {valueList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* {<p>{data.title}</p>} */}
      {/* <h1 >{data[0].title}</h1> */}
      {/* <h1>{JSON.stringify(data)}</h1> */}
      {/* {data.map((item)=>(<p key={item.id}>{item.title}</p>))} */}
    </div>
  );
}

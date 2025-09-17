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
    // setValue("");

    if (value.trim()) {
      setValueList([...valueList, value]);
      setValue("");
    } else {
      alert("Please enter a valid name.");
    }
  };

  const handleEdit =()=>{
    const newName = prompt("Enter the new name:", valueList);
    if (newName !== null && newName.trim() !== "") {
      const updatedList = valueList.map((name, index) =>
        index === valueList.indexOf(name) ? newName : name
      );
      setValueList(updatedList);
    }
  }

  const handleDelete=(index)=>{
    const updatedList = valueList.filter((_, i) => i !== index);
    setValueList(updatedList);
  }
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return (
    <div>
      <h1>Display Component</h1>
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <button onClick={handleSubmit}>Submit</button>

        <div>
          <h2>Names List:</h2>
          <ul>
            {valueList?.length > 0 ? (
              valueList.map((item, index) => <li key={index}>{item}{' '}<button onClick={() => handleEdit(index)}>Edit</button>{' '}
            <button onClick={() => handleDelete(index)}>Delete</button></li>)
            ) : (
              <li>No names added yet.</li>
            )}
          </ul>
        </div>
      </div>

      <div>
        <h2>Fetched Data:</h2>
        {/* <h1 >{data[0].title}</h1> */}
        {/* <h1>{JSON.stringify(data)}</h1> */}
        {data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
        {/* {data.map((item)=>(<p key={item.id}>{item.title}</p>))} */}
      </div>
    </div>
  );
}

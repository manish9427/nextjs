import {useState} from 'react'


const Store = () => {
  const [data,setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Fetched data:', data);
      setData(result);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  return (
    <div className='store'>
      <h1>Fake Store</h1>
      <button onClick={fetchData}>Fetch Data</button>
        {data.map((item) => (
          <div key={item.id} className='product'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
    </div>
  )
}

export default Store
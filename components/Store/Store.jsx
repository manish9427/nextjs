import { useState, useEffect } from "react";
import "../../styles/Store.css";

const Store = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData(); // fetch data on component mount
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="store">
      <h1>Fake Store</h1>

      <div className="product-grid">
        {currentItems.map((item) => (
          <div key={item.id} className="product">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            onClick={() => handlePageChange(idx + 1)}
            disabled={currentPage === idx + 1}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Store;

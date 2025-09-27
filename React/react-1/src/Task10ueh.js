import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Task10ueh() {
  const [data, setData] = useState([]);
  

  const fetchData = async () => {
    try {
      const fetchedData = await axios.get(
        "https://68cbc6e3716562cf5074fcc3.mockapi.io/Product"
      );
      setData(fetchedData.data);
    } catch (error) {
      console.log("Problem fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      
        {data.map((item) => (

          <li key={item.id}>
            {item.title}, {item.price},{item.category}
          </li>
        ))}

    </div>
  );
}

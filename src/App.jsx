import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const getEglaesData = async () => {
    const preResult = await fetch('http://localhost:8080/api');
    const { data } = await preResult.json();
    setData(data);
  };

  const addItem = async () => {
    const res = await fetch('http://localhost:8080/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: Math.random() }),
    });
    const { data } = await res.json();
    setData(data);
  };

  useEffect(() => {
    getEglaesData();
  }, []);

  return (
    <div>
      <h1>APP</h1>
      <ul>{data && data.map((item) => <li>{item.text}</li>)}</ul>
      <button onClick={addItem}>ADD ITEM</button>
    </div>
  );
};

export default App;

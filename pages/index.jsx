import { useEffect, useState } from 'react';
import '../styles/globals.css';

export default function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main>
      <h1>test-nextjs-fullstack is running</h1>
      <section>
        <h2>Items</h2>
        {error && <p className="error">Error: {error}</p>}
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

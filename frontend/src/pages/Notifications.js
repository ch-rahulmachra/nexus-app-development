import { useEffect, useState } from "react";

export default function Notifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/notifications/")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Notifications</h2>

      {data.length === 0 && <p>No notifications</p>}

      <ul>
        {data.map(n => (
          <li key={n.id}>
            {n.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
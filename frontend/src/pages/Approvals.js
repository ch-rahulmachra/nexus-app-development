import { useEffect, useState } from "react";

export default function Approvals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/approvals/")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Approvals</h2>

      {data.length === 0 && <p>No approvals yet</p>}

      <ul>
        {data.map(a => (
          <li key={a.id}>
            {JSON.stringify(a)}
          </li>
        ))}
      </ul>
    </div>
  );
}
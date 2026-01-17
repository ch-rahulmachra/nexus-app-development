import { useEffect, useState } from "react";

export default function AuditLogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/audit/")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Audit Logs</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
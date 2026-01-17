import { useEffect, useState } from "react";

export default function Reports() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("/api/reports/")
      .then(res => res.json())
      .then(json => setReport(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Reports</h2>

      {!report && <p>Loading report...</p>}

      {report && (
        <pre>{JSON.stringify(report, null, 2)}</pre>
      )}
    </div>
  );
}
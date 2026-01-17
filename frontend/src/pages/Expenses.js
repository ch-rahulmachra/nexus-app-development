import { useEffect, useState } from "react";
import { expenseApi } from "../api/axios";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    expenseApi.get("/")
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <pre>{JSON.stringify(expenses, null, 2)}</pre>
    </div>
  );
}
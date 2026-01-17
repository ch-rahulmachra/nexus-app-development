import { userApi } from "../api/axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    userApi.get("/me").then(res => setUser(res.data));
  }, []);

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}

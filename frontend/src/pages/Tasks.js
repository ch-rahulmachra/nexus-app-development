import { taskApi } from "../api/axios";
import { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskApi.get("/").then(res => setTasks(res.data));
  }, []);

  return <pre>{JSON.stringify(tasks, null, 2)}</pre>;
}

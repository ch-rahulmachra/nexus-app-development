import { projectApi } from "../api/axios";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    projectApi.get("/").then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  );
}

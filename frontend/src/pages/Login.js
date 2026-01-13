import { authApi } from "../api/axios";

export default function Login() {
  const handleLogin = async () => {
    const email = prompt("Email:");
    const password = prompt("Password:");

    const res = await authApi.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return <button onClick={handleLogin}>Login</button>;
}

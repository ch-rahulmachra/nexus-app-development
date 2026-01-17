import { useState } from "react";
import { authApi } from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const res = await authApi.post("/login", { email, password });

        console.log("LOGIN RESPONSE:", res.data);

        const token =
          res.data.token ||
          res.data.accessToken ||
          res.data?.data?.token;

        if (!token) {
          throw new Error("Token missing");
        }

        localStorage.setItem("token", token);

        console.log("Redirecting to dashboard...");
        navigate("/dashboard");

      } catch (err) {
        console.error("LOGIN ERROR:", err);
        alert("Login failed");
      }
    };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}
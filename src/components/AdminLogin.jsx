import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-2xl w-96 shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-slate-700 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-500 py-3 rounded font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
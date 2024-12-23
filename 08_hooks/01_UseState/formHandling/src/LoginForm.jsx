import "./index.css";
import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    console.log(loginData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          required
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
};

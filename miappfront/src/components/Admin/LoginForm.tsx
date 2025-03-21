import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of Navigate

import UserApi from "../../api/userApi";

const LoginForm: React.FC = () => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [email, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = { email, password };

    try {
      const token = await UserApi.loginApi(formData);
      
      // Store the token in localStorage or your preferred state management
      localStorage.setItem('authToken', token);

      // Navigate to the dashboard on successful login
      navigate('/dashboard'); // Use navigate function
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
            />
          </div>

          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`w-full py-2 px-4 ${loading ? "bg-gray-400" : "bg-blue-500"} text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              disabled={loading}
            >
              {loading ? "Cargando..." : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

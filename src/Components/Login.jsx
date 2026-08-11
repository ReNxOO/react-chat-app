import React, { useState } from "react";

export default function Login({ setIsLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });

      if (res.ok) {
        const data = await res.json();

        localStorage.setItem("token", data.token);
        setIsLogin(true);
      } else {
        alert("Username or Password is incorrect!");
      }
    } catch (error) {
      alert("Server Error!");
    }

    setUser("");
    setPass("");
  };

  const handleReset = () => {
    setUser("");
    setPass("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Login</h1>

          <p className="text-gray-500 mt-2">Fake Store API Authentication</p>
        </div>

        {/* Demo Account */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
          <h3 className="font-semibold text-blue-700 mb-2">Demo Account</h3>

          <p className="text-gray-700">
            <span className="font-semibold">Username:</span> mor_2314
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Password:</span> 83r5^_
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            value={user}
            placeholder="Enter Username..."
            onChange={(e) => setUser(e.target.value)}
            className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition"
          />

          <input
            type="password"
            value={pass}
            placeholder="Enter Password..."
            onChange={(e) => setPass(e.target.value)}
            className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition"
          />

          <button
            type="submit"
            className="w-full h-14 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition active:scale-95"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full h-12 rounded-xl border border-red-300 text-red-500 hover:bg-red-50 transition"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

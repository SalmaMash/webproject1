import React from "react";

export default function Login() {
function handleClick() {
    alert("Logged in successfully!");
  }
  return (
    <div className="page auth-page">
      <h1>Login</h1>

      <form className="form">

        <label>
          Email
          <input
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="••••••"
            required
          />
        </label>

        <button
          type="submit"
          className="btn"
          onClick={handleClick}
        >
          Sign In
        </button>

      </form>
    </div>
  );
}

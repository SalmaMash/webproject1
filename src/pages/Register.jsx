import React from "react";

export default function Register() {

 function handleClick() {
    alert("Account created successfully!");
  }

  return (
    <div className="page auth-page">
      <h1>Register</h1>

      <form className="form" >

        <label>
          Full name
          <input
            type="text"
            placeholder="Your name"
            required
          />
        </label>

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
            placeholder="Create a password"
            required
          />
        </label>

        <button
        onClick={handleClick}
          type="submit"
          className="btn"
          
        >
          Create account 
        </button   >

      </form>
    </div>
  );
}

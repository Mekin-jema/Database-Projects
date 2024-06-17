import "./login.scss";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Fake login function
    if (username === "admin" && password === "password") {
      alert("Logged in");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social Media App. </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            dicta.
          </p>
          <span>Don't you have an account ?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1 style={{ color: "green" }}>Login</h1>
          <span>Login to your account</span>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = ({ handleLogin }) => {
  const initialVal = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialVal);

  const testLogin = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    e.preventDefault();
    await handleLogin(login);
  };

  return (
    <>
      <header className="auth-heading">Login</header>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={login.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="example@example.com"
          />
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            value={login.password}
            onChange={handleChange}
            required
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="login-helper">
          <div className="checkbox-grp">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="#" className="text-underline">
            Forgot Password?
          </a>
        </div>
        <button className="btn warning">login</button>
      </form>
      <p
        className="text-underline text-center highlight"
        style={{ cursor: "pointer" }}
        onClick={() => handleLogin(testLogin)}
      >
        Guest Login
      </p>
      <div className="sub-text text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-secondary">
          Sign up!
        </Link>
      </div>
    </>
  );
};

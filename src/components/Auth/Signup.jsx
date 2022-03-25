import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = ({ handleSignUp }) => {
  const initialVal = {
    name: "",
    email: "",
    password: "",
  };
  const [signup, setSignup] = useState(initialVal);
  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignUp(signup);
  };
  return (
    <>
      <header className="auth-heading">Register</header>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-grp">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            value={signup.name}
            onChange={handleChange}
            required
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={signup.email}
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
            value={signup.password}
            onChange={handleChange}
            required
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn warning">register</button>
      </form>
      <div className="sub-text text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary">
          Log in!
        </Link>
      </div>
    </>
  );
};

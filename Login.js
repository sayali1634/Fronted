import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === login.email &&
      storedUser.password === login.password
    ) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email"
            className="form-control mb-3"
            value={login.email}
            onChange={handleChange}
            required
          />

          <input type="password" name="password" placeholder="Password"
            className="form-control mb-3"
            value={login.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">Login</button>
        </form>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
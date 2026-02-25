import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === form.email) {
      alert("User already registered!");
      return;
    }

    const userData = {
      name: form.name,
      email: form.email,
      password: form.password
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name"
            className="form-control mb-3"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input type="email" name="email" placeholder="Email"
            className="form-control mb-3"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input type="password" name="password" placeholder="Password"
            className="form-control mb-3"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input type="password" name="confirmPassword" placeholder="Confirm Password"
            className="form-control mb-3"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary w-100">Register</button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
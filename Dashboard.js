import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2>Welcome, {user?.name} 👋</h2>
        <hr />

        <h5>Dashboard Overview</h5>
        <ul>
          <li>Employee Attendance: 95%</li>
          <li>Pending Leave Requests: 3</li>
          <li>Payroll Status: Processed</li>
        </ul>

        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="title">Dashboard</h1>
      <h3 className="subtitle">Overview</h3>

      <div className="cards-row">
        <div className="card">
          <p>Total Stores</p>
          <h2>1,250</h2>
        </div>
        <div className="card">
          <p>Pending Approvals</p>
          <h2>15</h2>
        </div>
        <div className="card">
          <p>Total Orders Today</p>
          <h2>320</h2>
        </div>
        <div className="card">
          <p>Active Customers</p>
          <h2>850</h2>
        </div>
        <div className="card">
          <p>Pending Menu Approvals</p>
          <h2>8</h2>
        </div>
      </div>

      <div className="card full-width">
        <p>Unread Chats</p>
        <h2>22</h2>
      </div>
    </div>
  );
};

export default Dashboard;

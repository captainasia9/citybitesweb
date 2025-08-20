import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default App;

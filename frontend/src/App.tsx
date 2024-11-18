// src/App.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="login-container">
        <h1>Application Portal</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Add additional routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

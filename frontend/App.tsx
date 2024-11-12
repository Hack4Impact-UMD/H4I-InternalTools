// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './src/pages/login'

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

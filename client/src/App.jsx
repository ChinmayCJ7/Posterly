import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; 
import Register from './pages/Register';
import PosterGenerator from './pages/PosterGenerator';
import LandingPage from "./pages/LandingPage";

const App = () => (
  <Router>
    <Routes>
    <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<PosterGenerator />} />
    
    </Routes>
  </Router>
);

export default App;

import './static/css/_common.scss';
import './index.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

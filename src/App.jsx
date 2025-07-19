import './static/css/_common.scss';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

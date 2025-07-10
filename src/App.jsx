import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from './components/Topbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <header className="App-header">
          <p>Edit <code>src/App.js</code> and save to reload. Learn React</p>
        </header>
      </div>
    </Router>
  );
}

export default App;

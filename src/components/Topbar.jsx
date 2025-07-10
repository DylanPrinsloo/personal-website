import React from "react";
import { Link } from "react-router-dom";
import './Topbar.css';

const Topbar = () => {
  return (
    <header className="topbar">
      {/* Left: Logo */}
      <div>
        <img
          src="/apple-touch-icon.png" // Correct path for public assets
          alt="Logo"
          className="topbar-logo"
        />
      </div>

      {/* Center: Nav Links */}
      <nav className="topbar-nav">
        <Link
          to="/agents"
          className="topbar-link"
        >
          Agents
        </Link>
        <Link
          to="/dashboard"
          className="topbar-link"
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Topbar;


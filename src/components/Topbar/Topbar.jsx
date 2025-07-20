import React from "react";
import { Link } from "react-router-dom";
import './Topbar.scss';

const Topbar = () => {
  return (
    <header className="topbar">
      <div>
        <Link to="/home">
          <img
            src="/apple-touch-icon.png"
            alt="Logo"
            className="topbar-logo"
          />
        </Link>
      </div>

      <nav className="topbar-nav">
        <Link
          to="/agents"
          className="button-link"
        >
          Contact
        </Link>
        <Link
          to="/dashboard"
          className="button-link"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Topbar;


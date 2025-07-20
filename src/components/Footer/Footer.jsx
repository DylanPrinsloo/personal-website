import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-logo">
                    <Link to="/home">
                        <img
                            src="/apple-touch-icon.png"
                            alt="Logo"
                            className="topbar-logo"
                        />
                    </Link>
                </div>
                <div className="footer-columns">
                    <div className="footer-col">
                        <a href="/home" className="button-link">Home</a>
                        <a href="/" className="button-link">Projects</a>
                        <a href="/" className="button-link">Contact</a>

                    </div>
                    <div className="footer-col">
                        <a href="#" className="button-link">LinkedIn</a>
                        <a href="#" className="button-link">Github</a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                All rights reserved.<br />
                Developed by Dylan Prinsloo
            </div>
        </footer>
    );
};

export default Footer;
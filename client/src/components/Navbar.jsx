// Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">Vehicle Detection App</a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import React, { Component } from 'react';
import './navbar.css';
import logo from "../../assets/images/android-chrome-192x192.png"

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <div className="brand-name">
                        <img className="logo" alt="What Recipe's logo" src={logo} />
                        <span className="brand-logo">What Recipe!?</span>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">Sign Up</li>
                        <li className="nav-item">Log In</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;
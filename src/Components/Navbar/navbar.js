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
                    <div className="nav-list">
                        <div className="nav-item" onClick={() => window.location = '/'}>Sign Up</div>
                        <div className="nav-item" onClick={() => window.location = '/'}>Log In</div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
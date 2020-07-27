import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h4>What Recipe</h4>
                    <ul>
                        <li>Sign Up</li>
                        <li>Log In</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;
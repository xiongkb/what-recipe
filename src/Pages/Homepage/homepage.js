import React, { Component } from 'react';
import Navbar from "../../Components/Navbar/navbar"

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2>Log in or Sign up to save your favorite recipes!</h2>
            </div>
        )
    }
}

export default Homepage;
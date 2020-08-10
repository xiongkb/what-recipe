import React, { Component } from "react";
import "./signup.css";

class Signup extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Sign up to save your favorite recipe!</h1>
                </div>
                <form>
                    <div>
                        <label>Pick a username</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Set a password</label>
                        <input></input>
                    </div>
                    <button>Sign up!</button>
                </form>
            </div>
        )
    }
}

export default Signup;
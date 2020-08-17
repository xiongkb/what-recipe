import React, { Component } from "react";
import "./login.css";

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Sign up to save your favorite recipe!</h1>
                </div>
                <form>
                    <div>
                        <label>Username</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input></input>
                    </div>
                    <button>Log in!</button>
                    <div>
                        <p>Or log in using these alternatives</p>
                        <a className="google-btn" href="http://localhost:3030/auth/google">Google+</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
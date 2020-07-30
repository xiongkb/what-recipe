import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./assets/css/app.css"

// pages
import Homepage from "./Pages/Homepage/homepage"
import Login from "./Pages/LogIn/login"
import Signup from "./Pages/SignUp/signup"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

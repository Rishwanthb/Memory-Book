import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ForgotPassword from "views/ForgotPassword/ForgotPassword.js";
import Signup from "views/Signup/Signup.js";

import { AuthProvider } from "./authservices/auth";
import PrivateRoute from "./authservices/privateroute";

var hist = createBrowserHistory();

ReactDOM.render(
  <AuthProvider>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/" component={Components} />
      </Switch>
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);

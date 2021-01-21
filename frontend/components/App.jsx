import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBar from "./navigation/nav_bar";

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <>
        <NavBar />

        {/* Redirect user to home if they are already signed in. */}
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>

        {/* Redirect user to signup page if they are aren't logged in. */}
        {/* <ProtectedRoute exact path="/routes/new" component={ComponentName} /> */}
    </>
);

export default App;
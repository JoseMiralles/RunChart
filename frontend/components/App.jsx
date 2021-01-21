import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavGreetingContainer from "./greeting/nav_greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <div>
        <NavGreetingContainer />

        {/* Redirect user to home if they are already signed in. */}
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>

        {/* Redirect user to signup page if they are aren't logged in. */}
        {/* <ProtectedRoute exact path="/routes/new" component={ComponentName} /> */}
    </div>
);

export default App;
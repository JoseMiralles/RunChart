import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomeScreenContainer from "./home_screen/home_screen_container";
import NavBar from "./navigation/nav_bar";
import RouteBuilderContainer from "./route_builder/route_builder_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <>

        <NavBar />

        <Route exact path="/" component={HomeScreenContainer} />

        {/* Redirect user to home if they are already signed in. */}
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>

        {/* Redirect user to signup page if they are aren't logged in. */}
        <ProtectedRoute exact path="/routes/new" component={RouteBuilderContainer} />
        <ProtectedRoute exact path="/routes/find" component={<h1></h1>} />

    </>
);

export default App;
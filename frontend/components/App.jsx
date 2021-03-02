import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Footer from "./footer";
import HomeScreenContainer from "./home_screen/home_screen_container";
import RouteShowContainer from "./routes/show/route_show_container";
import RouteEditorContainer from "./route_builder/route_editor_container";
import RouteBuilderContainer from "./route_builder/route_builder_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import FindRoutesContainer from "./routes/find/find_routes_container";
import MyRoutesContainer from "./routes/user/my_routes_container";
import NavBarContainer from "./navigation/nav_bar_container";

const App = () => (
    <>
        <NavBarContainer />

        <Route exact path="/" component={HomeScreenContainer} />

        {/* Redirect user to home if they are already signed in. */}
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>

        <Switch>
            <ProtectedRoute path="/my_routes" component={MyRoutesContainer} />

            {/* Redirect user to signup page if they are aren't logged in. */}
            <ProtectedRoute exact path="/routes/new" component={RouteBuilderContainer} />
            <Route exact path="/routes/find" component={FindRoutesContainer} />

            <ProtectedRoute exact path="/routes/:routeId/edit" component={RouteEditorContainer} />

            {/* View Route */}
            <Route exact path="/routes/:routeId" component={RouteShowContainer} />
        </Switch>

        <Footer />
    </>
);

export default App;
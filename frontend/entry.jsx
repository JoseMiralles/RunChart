import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";

// Remove on production
import * as SessionApiUtil from "./util/session_api_util";
window.SessionApiUtil = SessionApiUtil;
import * as sessionActions from "./actions/session_actions";
window.sessionActions = sessionActions;

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();

    // Remove on production
    window.store = store;
    
    ReactDOM.render(
        <Root store={store} />,
        document.getElementById("root")
    );

});
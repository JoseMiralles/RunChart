import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";

// Remove on production
// import * as SessionApiUtil from "./util/session_api_util";
// window.SessionApiUtil = SessionApiUtil;
// import * as sessionActions from "./actions/session_actions";
// window.sessionActions = sessionActions;
import * as routeAPI from "./util/routes_api_util";
window.routeAPI = routeAPI;
import * as routeActions from "./actions/routes_actions";
window.routeActions = routeActions;

document.addEventListener("DOMContentLoaded", () => {

    const mainColor = document.defaultView.getComputedStyle(document.querySelector("#styles-store")).color;
    const store = generateStore(mainColor);

    // Remove on production
    window.store = store;
    
    ReactDOM.render(
        <Root store={store} />,
        document.getElementById("root")
    );

});

const generateStore = (mainColor) => {
    let store;
    let preloadedState = {
        styles: {
            mainColor: mainColor
        }
    };
    if (window.currentUser) {
        preloadedState.session = { id: window.currentUser.id };
        preloadedState.entities ={
            users: { [window.currentUser.id]: window.currentUser }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore(preloadedState);
    }
    const remove = document.getElementById("bootstrap-current-user");
    if (remove) remove.innerHTML = "";
    return store;
};
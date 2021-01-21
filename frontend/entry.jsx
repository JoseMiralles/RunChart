import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";

// Remove on production
// import * as SessionApiUtil from "./util/session_api_util";
// window.SessionApiUtil = SessionApiUtil;
// import * as sessionActions from "./actions/session_actions";
// window.sessionActions = sessionActions;

document.addEventListener("DOMContentLoaded", () => {

    const store = generateStore();

    // Remove on production
    // window.store = store;
    
    ReactDOM.render(
        <Root store={store} />,
        document.getElementById("root")
    );

});

const generateStore = () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const remove = document.getElementById("bootstrap-current-user");
    if (remove) remove.innerHTML = "";
    return store;
};
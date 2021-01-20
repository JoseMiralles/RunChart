import React from "react";
import ReactDOM from "react-dom";

// Remove on production
import * as SessionApiUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {

    window.SessionApiUtil = SessionApiUtil;

    ReactDOM.render(
        <h1>Hello from entry.js</h1>,
        document.getElementById("root")
    );

});
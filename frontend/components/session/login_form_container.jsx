import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SessionForm from "./session_form";
import { login, clearSessionErrors } from "../../actions/session_actions";

const ms = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "Login",
        initialState: {username: "", password: ""},
        toggleLink: <Link to="/signup">Do you want to signup instead?</Link>
    }
}

const md = (dispatch) => {
    return {
        processForm: (form) => dispatch(login(form)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(ms, md)(SessionForm);
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SessionForm from "./session_form";
import { signup, clearSessionErrors } from "../../actions/session_actions";

const ms = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "Sign Up",
        initialState: {username: "", email: "", password: "", firstName: "", lastName: ""},
        toggleLink: <Link to="/login">Do you want to login instead?</Link>
    }
}

const md = (dispatch) => {
    return {
        processForm: (form) => dispatch(signup(form)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(ms, md)(SessionForm);
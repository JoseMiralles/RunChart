import * as utils from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const login = (userForm) => (dispatch) => (
    utils.login(userForm).then(
        user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => (dispatch) => (
    utils.logout().then(() => dispatch(logoutCurrentUser()))
);

export const signup = (userForm) => (dispatch) => (
    utils.signup(userForm).then(
        user => dispatch(receiveCurrentUser(user)))
);
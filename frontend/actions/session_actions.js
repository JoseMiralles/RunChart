import * as utils from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const login = (userForm) => (dispatch) => (
    utils.login(userForm).then(
        user => dispatch(receiveCurrentUser(user)))
        .fail( ({responseJSON}) => dispatch(receiveSessionErrors(responseJSON)) )
);

export const logout = () => (dispatch) => (
    utils.logout().then(() => dispatch(logoutCurrentUser()))
    .fail( (response) => {
        if (response.status === 401) dispatch(logoutCurrentUser());
        return dispatch(receiveSessionErrors(response.responseJSON))
    })
);

export const signup = (userForm) => (dispatch) => (
    utils.signup(userForm)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail( ({responseJSON}) => dispatch(receiveSessionErrors(responseJSON)) )
);
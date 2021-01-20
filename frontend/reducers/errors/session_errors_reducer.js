import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../../actions/session_actions";

const defaultState = [];

const sessionErrorsReducer = (state = defaultState, action) => {

    Object.freeze(state);

    switch(action){

        case RECEIVE_SESSION_ERRORS:
            return action.errors;

        case RECEIVE_CURRENT_USER:
            return [];

        default: return state;

    }

}

export default sessionErrorsReducer;
import { RECEIVE_ALL_ROUTES } from "../../actions/routes_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER } from "../../actions/user_actions";


const defaultState = {};

const usersReducer = (state = defaultState, action) => {

    Object.freeze(state);

    switch(action.type){

        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state,
                { [action.user.id]: action.user }
            );

        case RECEIVE_USER:
            return Object.assign({}, state,
                { [action.user.id]: action.user }    
            );

        case RECEIVE_ALL_ROUTES:
            return state;

        default: return state;

    }

}

export default usersReducer;
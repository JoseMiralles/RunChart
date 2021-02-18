import { SET_IS_MOBILE, SET_MAIN_COLOR } from "../actions/styles_actions";


const stylesReducer = (state = {}, action) => {

    Object.freeze(state);

    switch( action.type ){

        case SET_MAIN_COLOR:
            const colorState = Object.assign( {}, state, {mainColor: action.color} );
            return colorState;

        case SET_IS_MOBILE:
            const newState = Object.assign( {}, state, {isMobile: action.isMobile} );
            return newState;

        default: return state;

    }

}

export default stylesReducer;
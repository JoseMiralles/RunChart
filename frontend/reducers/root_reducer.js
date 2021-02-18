import { combineReducers } from "redux";
import entitiesReducer from "./entities/entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors/errors_reducer";
import stylesReducer from "./styles_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    styles: stylesReducer
});

export default rootReducer;
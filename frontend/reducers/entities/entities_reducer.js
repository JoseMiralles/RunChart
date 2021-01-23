import { combineReducers } from "redux";
import routesReducer from "./routes_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: routesReducer
});

export default entitiesReducer;
import { connect } from "react-redux";

import { fetchBookmarkedRoutes, fetchUserRoutes } from "../../../actions/routes_actions";
import MyRoutes from "./my_routes";

const ms = (state) => ({
    routes: state.entities.routes,
    userId: state.session.id
});

const md = (dispatch) => ({
    fetchUserRoutes: (userId) => dispatch(fetchUserRoutes(userId)),
    fetchBookmarkedRoutes: (userId) => dispatch(fetchBookmarkedRoutes(userId))
});

const MyRoutesContainer = connect(ms, md)(MyRoutes);
export default MyRoutesContainer;
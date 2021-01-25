import { connect } from "react-redux";

import RouteShow from "./route_show";
import { deleteRoute, fetchRoute } from "../../../actions/routes_actions";
import { fetchUser } from "../../../actions/user_actions";

const ms = (state, ownProps) => ({
    routeId: ownProps.match.params.routeId,
    route: state.entities.routes ? state.entities.routes[ownProps.match.params.routeId] : null,
    sessionId: state.session.id || null,
    mainColor: state.styles.mainColor
});

const md = (dispatch) => ({
    deleteRoute: id => dispatch(deleteRoute(id)),
    fetchRoute: id => dispatch(fetchRoute(id)),
    fetchUser: id => dispatch(fetchUser(id))
});

const RouteShowContainer = connect(ms, md)(RouteShow);
export default RouteShowContainer;
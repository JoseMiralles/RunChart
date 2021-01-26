import { connect } from "react-redux";
import { fetchRoute, updateRoute } from "../../actions/routes_actions";
import RouteBuilder from "./route_builder";

const ms = (state, ownProps) => ({
    creatorId: state.session.id,
    mainColor: state.styles.mainColor,
    routeId: ownProps.match.params.routeId,
    // route: state.entities.routes ? state.entities.routes[ownProps.match.params.routeId] : null,
});

const md = (dispatch) => ({
    fetchRoute: id => dispatch(fetchRoute(id)),
    action: (route) => dispatch(updateRoute(route))
});

const RouteEditorContainer = connect(ms, md)(RouteBuilder);
export default RouteEditorContainer;
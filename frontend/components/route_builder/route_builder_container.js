import { connect } from "react-redux";
import { createRoute } from "../../actions/routes_actions";


import RouteBuilder from "./route_builder";

const ms = (state) => ({
    creatorId: state.session.id,
    mainColor: state.styles.mainColor
})

const md = (dispatch) => ({
    action: (route) => dispatch(createRoute(route))
});

const RouteBuilderContainer = connect(ms, md)(RouteBuilder);
export default RouteBuilderContainer;

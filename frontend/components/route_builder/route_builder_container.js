import { connect } from "react-redux";

import { createRoute } from "../../util/routes_api_util";
import RouteBuilder from "./route_builder";

const ms = (state) => ({
    mainColor: state.styles.mainColor
})

const md = (dispatch) => ({
    createRoute: (route) => dispatch(createRoute(route))
});

const RouteBuilderContainer = connect(ms, md)(RouteBuilder);
export default RouteBuilderContainer;

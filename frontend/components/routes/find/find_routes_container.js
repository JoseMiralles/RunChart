import { connect } from "react-redux";

import { fetchRoutes } from "../../../actions/routes_actions";
import FindRoutes from "./find_routes";

const ms = (state) => ({
    routes: state.entities.routes
});

const md = (dispatch) => ({
    fetchRoutes: (params) => dispatch(fetchRoutes(params))
});

const FindRoutesContainer = connect(ms, md)(FindRoutes);
export default FindRoutesContainer;
import { connect } from "react-redux";

import { login } from "../../actions/session_actions";
import DemoButton from "./demo_button";

const ms = null;
const md = (dispatch) => ({
    login: (form) => dispatch(login(form))
});

export default connect(ms, md)(DemoButton);
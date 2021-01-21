import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";

import NavGreeting from "./nav_greeting";

const ms = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const md = (dispatch) => ({
    logout: () => dispatch(logout())
});

const NavGreetingContainer = connect (ms, md)(NavGreeting);

export default NavGreetingContainer;
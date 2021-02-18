import { connect } from "react-redux";
import NavBar from "./nav_bar";


const ms = (state) => {
    return {
        isMobile: state.styles.isMobile
    }
};

const NavBarContainer = connect(ms, null)(NavBar);
export default NavBarContainer;
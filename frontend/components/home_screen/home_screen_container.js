import { connect } from "react-redux";
import HomeScreen from "./home_screen";

const ms = state => ({
    currentUser: state.entities.users[state.session.id]
});

const md = null;

const HomeScreenContainer = connect(ms, md)(HomeScreen);
export default HomeScreenContainer;
import React from "react";
import { Link } from "react-router-dom";

export default class NavGreeting extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.currentUser ? this.renderLogoutViews() : this.renderSessionLinks()
        );
    }

    renderSessionLinks(){
        return (
            <>
                <Link className="btn" to="/login">Login</Link>
                <Link className="btn btn-main" to="/signup">Signup</Link>
            </>
        );
    }

    renderLogoutViews(){
        return (
            <>
                <span className="header-name">{this.props.currentUser.username}</span>
                <button className="btn btn-main" onClick={this.props.logout}>LOGOUT</button>
            </>
        );
    }

}
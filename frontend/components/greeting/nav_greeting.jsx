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
                <Link to="/login">Login</Link>
                    &nbsp;or&nbsp;
                <Link to="/signup">Signup</Link>
            </>
        );
    }

    renderLogoutViews(){
        return (
            <>
                <div className="header-name">{this.props.currentUser.username}</div>
                <button className="header-button" onClick={this.props.logout}>logout</button>
            </>
        );
    }

}
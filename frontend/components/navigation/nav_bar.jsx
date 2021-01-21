import React from "react";
import Link from "react-router-dom/Link";

import NavGreetingContainer from "./nav_greeting_container";

export default class NavBar extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="container">
                <div className="left">
                    <Link className="logo" to="/">RunChart</Link>
                </div>
                <div className="center">
                    <Link to="/routes/new">Create Route</Link>
                    <Link to="/routes/find">Find Routes</Link>
                </div>
                <div className="right">
                    <NavGreetingContainer/>
                </div>
            </nav>
        );
    }

}
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
                <div class="left logo">
                    RunChart
                </div>
                <div class="center">
                    <Link to="/routes/new">Create Route</Link>
                    <Link to="/routes/find">Find Routes</Link>
                </div>
                <div class="right">
                    <NavGreetingContainer/>
                </div>
            </nav>
        );
    }

}
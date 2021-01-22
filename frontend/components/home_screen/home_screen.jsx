import React from "react";
import { Link } from "react-router-dom";

import Greeting from "./greeting";

const HomeScreen = (props) => {
    return(
        <section className="container home-screen-container">
            
            {!props.currentUser ? <Greeting/> : ""}

            <div className="create-route-section">
                <div className="inner">
                    <h1>BLAZE NEW TRAILS</h1>
                    <p className="half">
                        Stay safe, plan logistics, and know the terrain.
                    </p>
                    <h3>CREATE YOUR OWN ROUTE</h3>
                    <Link className="btn btn-outline" to="/routes/new">Create Route</Link>
                </div>
            </div>

            <div className="find-route-section">
                <div className="inner">
                    <h1>EXPLORE CITY ROUTES</h1>
                    <p className="half">
                        Search specifics, find popular routes, and save your favorites.
                    </p>
                    <h3>FIND A NEW ROUTES</h3>
                    <Link className="btn btn-outline-dark" to="/routes/new">Find Routes</Link>
                </div>
            </div>

        </section>
    );
}

export default HomeScreen;
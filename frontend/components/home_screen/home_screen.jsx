import React from "react";
import { Link } from "react-router-dom";

import Greeting from "./greeting";

/// This is the landing page.
const HomeScreen = (props) => {
    return(
        <section className="container home-screen-container">
            
            {/* /// Only renders if the user isn't signed in. */}
            {!props.currentUser ? <Greeting/> : ""}

            <div className="create-route-section">
                <div className="inner">

                    <hr className="weird_line"></hr>
                    <h1>BLAZE NEW TRAILS</h1>
                    <hr className="weird_line"></hr>

                    <p className="half">
                        Stay safe, plan logistics, and know the terrain.
                    </p>
                    <h3>CREATE YOUR OWN ROUTE</h3>
                    <Link className="btn btn-main" to="/routes/new">Create Route</Link>
                </div>
            </div>

            <div className="find-route-section">
                <div className="inner">
                    <hr className="weird_line"></hr>
                    <h1>EXPLORE CITY ROUTES</h1>
                    <hr className="weird_line"></hr>
                    
                    <p className="half">
                        Search specifics, find popular routes, and save your favorites.
                    </p>
                    <h3>FIND NEW ROUTES</h3>
                    <Link className="btn btn-main" to="/routes/new">Find Routes</Link>
                </div>
            </div>

        </section>
    );
}

export default HomeScreen;
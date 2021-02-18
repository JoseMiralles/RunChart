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

                    <h3><i className="material-icons">architecture</i> CREATE YOUR OWN ROUTE</h3>
                    <p className="half">
                        Stay safe, plan logistics, and know the terrain.
                    </p>
                    <Link className="btn btn-main" to="/routes/new">Create Route</Link>
                </div>

                <div className="svg-container">
                <svg className="top-svg" id="poly_3" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 0,66 100,100 100,33">
                    </polygon>
                </svg>

            </div>

            </div>

            <div className="find-route-section">
                <div className="inner">
                    <hr className="weird_line"></hr>
                    <h1>EXPLORE CITY ROUTES</h1>
                    <hr className="weird_line"></hr>
                    
                    <h3>FIND NEW ROUTES <i className="material-icons">search</i></h3>
                    <p className="half">
                        Search specifics, find popular routes, and save your favorites.
                    </p>
                    <Link className="btn btn-main" to="/routes/find">Find Routes</Link>
                </div>
            </div>

        </section>
    );
}

export default HomeScreen;
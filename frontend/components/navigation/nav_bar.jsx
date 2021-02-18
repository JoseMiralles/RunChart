import React from "react";
import Link from "react-router-dom/Link";

import NavGreetingContainer from "./nav_greeting_container";

export default class NavBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            menuFolded: true,
        };

        this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    render(){
        let mobileClass = "";
        let hiddenClass = "";
        if (this.props.isMobile){
            mobileClass = "mobile-menu";
            if (this.state.menuFolded){
                hiddenClass = "hidden";
            }
        }
        return(
            <nav className={`container ${mobileClass}`}>
                <div className="left">
                    <Link id="nav-logo" className="logo" to="/">
                        <i className="material-icons">near_me</i>
                        RunChart
                    </Link>
                </div>
                <div className={`center ${hiddenClass}`}
                    onClick = { !this.state.menuFolded ? this.closeMenu : undefined }
                    >
                    <Link to="/routes/new">Create Route</Link>
                    <Link to="/routes/find">Find Routes</Link>
                    <Link to="/my_routes">My Routes</Link>
                </div>
                <div className={`right ${hiddenClass}`}
                    onClick = { !this.state.menuFolded ? this.closeMenu : undefined }
                    >
                    <NavGreetingContainer/>
                </div>

                { this.props.isMobile &&
                <button
                onClick={ this.handleMenuButtonClick }
                className="menu-button"
                >
                    <i className="material-icons">menu</i>
                </button> }

            </nav>
        );
    }

    closeMenu(){
        this.setState({
            menuFolded: true
        });
    }

    handleMenuButtonClick(){
        this.setState({
            menuFolded: !this.state.menuFolded
        });
    }

}
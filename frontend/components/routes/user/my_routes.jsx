import React from "react";
import RoutesTable from "../routesTable";

export default class MyRoutes extends React.Component {

    constructor(props){
        super(props);

        this.flags = {user: "user", bookmarks: "bookmarks"};

        this.state = {
            selected: this.flags.user
        }

        this.tabSelected = this.tabSelected.bind(this);
    }

    render(){
        const selected = this.state.selected;
        return(
            <div className="my-routes-container container">

                <h1>My Routes</h1>
                <br/><br/>

                <ul onClick={this.tabSelected} className="tabs">
                    <li
                    className={selected === this.flags.user && "selected"}
                    action={this.flags.user}>Routes</li>
                    <li
                    className={selected === this.flags.bookmarks && "selected"}
                    action={this.flags.bookmarks}>Bookmarked</li>
                    <li className='line'></li>
                </ul>

                <RoutesTable routes={this.props.routes} />

            </div>
        );
    }

    componentDidMount(){
        this.props.fetchUserRoutes(this.props.userId);
    }

    tabSelected(e){
        if (e.target.attributes.action.value === this.state.selected) return;
        switch(e.target.attributes.action.value){
            case this.flags.user:
                return this.props.fetchUserRoutes(this.props.userId)
                    .then(this.setState({selected: e.target.attributes.action.value}));
                
            case this.flags.bookmarks:
                return this.props.fetchBookmarkedRoutes(this.props.userId)
                    .then(this.setState({selected: e.target.attributes.action.value}));
        
            default:
                return this.renderUserRoutes();
        }
    }

}


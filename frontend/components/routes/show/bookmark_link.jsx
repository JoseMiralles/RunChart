import React from "react";

import { fetchBookmark, bookmarkRoute, unBookmarkRoute } from "../../../util/bookmarks_api_util";

export default class BookmarkLink extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            bookmarked: false
        }

        this.addToBookMarks = this.addToBookMarks.bind(this);
        this.removeFromBookmarks = this.removeFromBookmarks.bind(this);
    }

    render(){
        if (this.state.bookmarked === false)
        return(
            <button onClick={this.addToBookMarks} className="flex-horizontal">
                <i className="material-icons">bookmark_border</i>
            </button>
        );

        if (this.state.bookmarked === true)
        return(
            <button onClick={this.removeFromBookmarks} className="flex-horizontal">
                <i className="material-icons">bookmark</i>
            </button>
        );
    }

    componentDidMount(){
        fetchBookmark(this.props.routeId).then(res => {
            this.setState({
                bookmarked: res
            });
        })
    }

    addToBookMarks(){
        bookmarkRoute(this.props.routeId).then(this.setState({bookmarked: true}));
    }

    removeFromBookmarks(){
        unBookmarkRoute(this.props.routeId).then(this.setState({bookmarked: false}));
    }

}
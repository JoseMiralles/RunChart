import { connect } from "react-redux";

import BookmarkLink from "./bookmark_link";

const ms = (state, ownProps) => ({
    userId: state.session.id
});

const md = null;

const BookmarkLinkContainer = connect(ms, md)(BookmarkLink);
export default BookmarkLinkContainer;
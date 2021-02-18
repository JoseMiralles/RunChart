import * as util from "../util/bookmarks_api_util";
import { receiveSessionErrors } from "./session_actions";

export const BOOKMARK_ROUTE = "BOOKMARK_ROUTE";
export const UN_BOOKMARK_ROUTE = "UN_BOOKMARK_ROUTE";

export const bookmarkRoute = (routeId) => (dispatch) => (
    util.bookmarkRoute(routeId).fail(response => {
        if (response.status === 401) dispatch(logoutCurrentUser());
        return dispatch(receiveSessionErrors(response.responseJSON))
    })
);

export const unBookmarkRoute = (routeId) => (dispatch) => (
    util.unBookmarkRoute(routeId).fail(response => {
        if (response.status === 401) dispatch(logoutCurrentUser());
        return dispatch(receiveSessionErrors(response.responseJSON))
    })
);
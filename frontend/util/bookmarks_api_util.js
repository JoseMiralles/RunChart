export const fetchBookmarkedRoutes = (userId) => (
    // /api/user/:user_id/bookmarks(.:format)
    $.ajax({
        method: "GET",
        url: `/api/user/${userId}/bookmarks`
    })
);

export const fetchBookmark = (routeId) => (
    // GET    /api/bookmarks(.:format)
    $.ajax({
        method: "GET",
        url: `/api/bookmarks/${routeId}`
    })
);

export const bookmarkRoute = (routeId) => (
    $.ajax({
        method: "POST",
        url: `/api/bookmarks`,
        data: { route_id: routeId }
    })
);
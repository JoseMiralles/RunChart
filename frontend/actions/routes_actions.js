

export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";

export const receiveAllRoutes = (routes) => ({
    type: RECEIVE_ALL_ROUTES,
    routes
});

export const receiveRoute = (route) => ({
    type: RECEIVE_ROUTE,
    route
});

export const removeRoute = (routeId) => ({
    type: REMOVE_ROUTE,
    routeId
});

export const fetchRoutes = () => {
    return (dispatch) => {
        return 
    }
}
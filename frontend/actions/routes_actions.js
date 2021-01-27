import * as api from "../util/routes_api_util";

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



export const fetchRoutes = (filters) => (dispatch) => (
    api.fetchRoutes(filters)
    .then(routes => dispatch(receiveAllRoutes(routes)))
);

export const fetchRoute = (id) => (dispatch) => (
    api.fetchRoute(id)
    .then(route => dispatch(receiveRoute(route)))
);

export const createRoute = (newRoute) => (dispatch) => (
    api.createRoute(newRoute)
    .then(route => dispatch(receiveRoute(route)))
);

export const updateRoute = (editedRoute) => (dispatch) => (
    api.updateRoute(editedRoute)
    .then(route => dispatch(receiveRoute(route)))
);

export const deleteRoute = (id) => (dispatch) => (
    api.deleteRoute(id)
    .then(() => dispatch(removeRoute(id)))
);
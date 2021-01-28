
export const fetchRoutes = (filters) => (
    $.ajax({
        method: "GET",
        url: "/api/routes",
        data: { filters }
    })
);

export const fetchUserRoutes = (userId) => (
    $.ajax({
        method: "GET",
        url: "/api/routes",
        data: { userId }
    })
);

export const fetchRoute = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/routes/${id}`
    })
);

export const createRoute = (routeForm) => (
    $.ajax({
        method: "POST",
        url: `/api/routes`,
        data: { route: routeForm }
    })
);

export const updateRoute = (routeForm) => (
    $.ajax({
        method: "PATCH",
        url: `/api/routes/${routeForm.id}`,
        data: {route: routeForm}
    })
);

export const deleteRoute = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/routes/${id}`
    })
);

export const newRoute = {
    creatorId: 7,
    name: "fromAPI2",
    route: "RouteString",
    startLat: 37.564662751371905,
    startLng: -77.47822230769728
};
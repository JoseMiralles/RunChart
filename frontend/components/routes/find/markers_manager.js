export default class MarkersManager {
    
    constructor(map){
        this.markers = {};
        this.map = map;
    }

    updateRoutes(routes){

        // Add the routes that aren't in markers already, into markers.
        Object.values(routes).forEach(route => {
            if (!this.markers[route.id]){
                const marker = new google.maps.Marker({
                    map: this.map,
                    title: route.name,
                    label: {
                        color: "black",
                        text: route.name,
                        fontWeight: "bold",
                    },
                    position: new google.maps.LatLng(
                        route.startLat,
                        route.startLng
                    )
                });
                marker.routeId = route.id;
                this.markers[route.id] = marker;
            }
        });

        // Remove the markers that aren't in routes anymore.
        Object.keys(this.markers).forEach(key => {
            if (!routes[key]) {
                this.markers[key].setMap(null);
                delete this.markers[key];
            }
        });

        debugger
    }

}
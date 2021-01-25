import React from "react";
import { googleMapStyles, loadGMaps } from "../../../scripts/googleMapsUtils";

export default class RouteShow extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            mapIsSetup: false,
            GMapsLoaded: false,
            serializedRoute: this.props.route ? this.props.route.route : null 
        }

        this.setUpMap = this.setUpMap.bind(this);
    }

    render(){
        return(
            <div className="route-show-container">
                <div className="route-show-map" ref="map"></div>
            </div>
        );
    }

    componentDidMount(){
        loadGMaps(() => {
            this.setState({GMapsLoaded: true});
        });
    }

    componentDidUpdate(){
        // Set up the map, if the Google maps api is loaded, and it hasn't been setup yet..
        if (this.state.GMapsLoaded && !this.state.mapIsSetup){
            this.setUpMap(()=>{
                // THIS GETS CALLED AFTER THE MAP IS LOADED AND RENDERED.
                // Render the path if it is already in state.
                if (this.state.serializedRoute){
                    this.createPolyPath();
                }
    
                // Fetch the map from the server to ensure having the latest version.
                this.props.fetchRoute(this.props.routeId).then((route)=>{
                    this.setState({
                        serializedRoute: route.route.route
                    });
                    this.createPolyPath();
                });
            });
        }
        // THE
    }

    setUpMap(mapLoadedCallback){
        // Setup map with options.
        const mapOptions = {
            center: {
                lat: this.props.route ? this.props.route.startLat : 40.78151480597849,
                lng: this.props.route ? this.props.route.startLng : -73.9667305095721,
            },
            zoom: 14,
            disableDefaultUI: true,
            // zoomControl: true,
            styles: googleMapStyles
        };
        this.map = new google.maps.Map(this.refs.map, mapOptions);

        // Fetch the route from the server once the map is fully loaded.
        google.maps.event.addListenerOnce(this.map, 'tilesloaded', mapLoadedCallback);

        // Set mapIsSetup to true to avoid re-rendering the map.
        this.setState({mapIsSetup: true});
    }

    // Sets up the polypath if it doesn't exist yet.
    createPolyPath(){
        this.poly = new google.maps.Polyline({
            // strokeColor: "#F15025",
            strokeColor: this.props.mainColor,
            strokeOpacity: 1.0,
            strokeWeight: 7,
            path: google.maps.geometry.encoding.decodePath(this.state.serializedRoute),
        });
        this.poly.setMap(this.map);

        // Fit map bounds to show entire path.
        const bounds = new google.maps.LatLngBounds();
        this.poly.getPath().forEach(coor => bounds.extend(coor));
        this.map.fitBounds(bounds);
    }

}
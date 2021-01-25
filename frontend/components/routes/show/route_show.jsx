import React from "react";
import { Link } from "react-router-dom";
import { googleMapStyles, loadGMaps } from "../../../scripts/googleMapsUtils";

export default class RouteShow extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            mapIsSetup: false,
            GMapsLoaded: false,
            serializedRoute: this.props.route ? this.props.route.route : null,
            totalMiles: 0,
            routeOwner: null,
            route: null,
            routeLocation: ""
        }

        this.setUpMap = this.setUpMap.bind(this);
    }

    render(){
        return(
            <div className="route-show-container container">

                <div className="route-show-stats-container">
                    <div className="flex-horizontal">
                        <i className="material-icons">account_circle</i>
                        &nbsp;
                        {this.state.routeOwner &&
                        <Link to={`/users/${this.state.routeOwner.id}`}>
                            { this.state.routeOwner.username}
                        </Link>}
                    </div>
                    <div className="flex-horizontal info-field">
                        <i className="material-icons">straighten</i>
                        &nbsp;
                        {this.state.totalMiles || "..."} miles
                    </div>
                    <h1>{this.state.route ? this.state.route.name : "..."}</h1>
                </div>

                <div className="">
                    {/* This is where the EDIT and BOOKMARK links will go. */}
                    
                </div>

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
                this.props.fetchRoute(this.props.routeId).then((action)=>{
                    this.setState({
                        serializedRoute: action.route.route,
                        route: action.route
                    });
                    // This adds the path to the map, and updates `totalMiles` in state.
                    this.createPolyPath();
                    
                    // Fetch the owner
                    // TODO: Ask if I should instead fetch the owner and route at once.
                    this.props.fetchUser(action.route.creatorId).then(action => {
                        this.setState({
                            routeOwner: action.user
                        });
                    });
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

        // Set the total miles.
        this.setState({
            totalMiles: Number.parseFloat(
                google.maps.geometry.spherical.computeLength(this.poly.getPath()) / 1600
            ).toFixed(2)
        });
    }

}
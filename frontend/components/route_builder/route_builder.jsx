import React from "react";
import { googleMapStyles } from "../../scripts/googleMapsUtils";

export default class RouteBuilder extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            mapIsSetup: false,
            emptyPath: true,
            totalMiles: 0,
            // serializedRoute: this.props.route ? this.props.route.route : null,
            serializedRoute: null,
            route: {name: ""}
        }

        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleControlClick = this.handleControlClick.bind(this);
        this.polyPathChanged = this.polyPathChanged.bind(this);
        this.centerMapOnCurrentPosition = this.centerMapOnCurrentPosition.bind(this);
        this.createPolyPath = this.createPolyPath.bind(this);
    }


    /// RENDER <<<
    render(){
        return(
            <div className="route-builder-container">

                <div className="messages">
                    <ul>
                        {!this.state.emptyPath && <li>Miles: {this.state.totalMiles}</li>}
                        {this.state.emptyPath && <li className="click-to-start">Click anywhere on the map to start.</li>}
                    </ul>
                </div>

                {/* Render The map controls only if the map is already setup. */}
                { !this.state.emptyPath && this.renderMapControls() }
                
                <div className="map-container" ref="map"></div>

            </div>
        );
    }

    renderMapControls(){
        return(
            <div className="controls-container">
                <div onClick={ this.handleControlClick } className="controls">
                    <button className="btn" action="undo">
                        <i className="material-icons" action="undo">backspace</i>
                        <label action="undo">back</label>
                    </button>
                    <button className="btn" action="clear">
                        <i className="material-icons" action="clear">clear</i>
                        <label action="clear">clear</label>
                    </button>
                    <button className="btn" action="save">
                        <i className="material-icons" action="save">save</i>
                        <label action="save">save</label>
                    </button>
                </div>
            </div>
        );
    }
    /// RENDER END >>>


    componentDidMount(){
        if (!this.props.routeId){
            // If there is now routeId provided, then this is a new route.
            this.setUpMap(this.createPolyPath);
        } else {
            // If there is a routeId, then this is route that is being edited.
            this.setUpMap(() => {
                this.props.fetchRoute(this.props.routeId).then(action => {
                    this.setState({
                        serializedRoute: action.route.route,
                        route: action.route
                    });
                    // The path can now be drawn.
                    this.createPolyPath();
                });
            });
        }
    }

    handleControlClick(e){
        switch(e.target.attributes.action.value){
            case "undo":
                this.poly.getPath().pop();
                break;
            case "clear":
                if (window.confirm("Are you sure you want to clear the map?"))
                    this.poly.getPath().clear();
                break;
            case "save":
                this.handleSave();
                break;
        }
    }

    handleSave(){
        const name = prompt("Give your new route a name.", this.state.route.name);
        if (name){
            const route = {
                creatorId: this.props.creatorId,
                name: name,
                route: google.maps.geometry.encoding.encodePath(this.poly.getPath()),
                startLat: this.poly.getPath().getArray()[0].lat(),
                startLng: this.poly.getPath().getArray()[0].lng()
            };
            if (this.props.routeId) route.id = this.props.routeId;
            this.props.action(route).then((savedRoute) => {
                this.props.history.push({
                    pathname: `/routes/${savedRoute.route.id}`
                });
            });
        }
    }

    // Sets up and renders the map, and calls the callback once it's rendered.
    setUpMap(mapLoadedCallback){
        // Setup map with options.
        const mapOptions = {
            center: {
                lat: 40.78151480597849,
                lng: -73.9667305095721
            }, // San Francisco coords
            zoom: 14,
            disableDefaultUI: true,
            // zoomControl: true,
            styles: googleMapStyles
        };
        this.map = new google.maps.Map(this.refs.map, mapOptions);

        // Setup event listener to call the callback when the map is fully loaded.
        google.maps.event.addListenerOnce(this.map, 'tilesloaded', mapLoadedCallback);

        // Set mapIsSetup to true to avoid re-rendering the map.
        this.setState({mapIsSetup: true});
    }

    // Setsup a polypath with an optional provided serialized path.
    createPolyPath() {
        // Initialize the polyline, and add it to the map.
        this.poly = new google.maps.Polyline({
            // strokeColor: "#F15025",
            strokeColor: this.props.mainColor,
            strokeOpacity: 1.0,
            strokeWeight: 7,
            editable: true
        });
        this.poly.setMap(this.map);

        if (this.state.serializedRoute){
            this.poly.setPath(google.maps.geometry.encoding.decodePath(this.state.serializedRoute));

            // Center the map around the path.
            const bounds = new google.maps.LatLngBounds();
            this.poly.getPath().forEach(coor => bounds.extend(coor));
            this.map.fitBounds(bounds);

            // This calculates and renders the total miles, and sets the starting marker.
            this.polyPathChanged()
        } else {
            // Center map on user's current location.
            navigator.geolocation.getCurrentPosition(this.centerMapOnCurrentPosition);
        }

        // Listen to changes to the poliLine's path.
        google.maps.event.addListener(this.poly, "dragend", this.polyPathChanged);
        google.maps.event.addListener(this.poly.getPath(), "insert_at", this.polyPathChanged);
        google.maps.event.addListener(this.poly.getPath(), "remove_at", this.polyPathChanged);
        google.maps.event.addListener(this.poly.getPath(), "set_at", this.polyPathChanged);

        // Add click event listener for the map.
        this.map.addListener("click", this.handleMapClick);
    }

    centerMapOnCurrentPosition(pos){
        const initialLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(initialLocation);
    }

    // Handles chanes to the polypath, and updates markers and miles.
    polyPathChanged(){
        const path = this.poly.getPath().getArray();
        this.setState({
            totalMiles: Number.parseFloat(
                google.maps.geometry.spherical.computeLength(path) / 1600
            ).toFixed(2)
        });

        if (!this.startMarker) {
            this.startMarker = new google.maps.Marker({
                position: path[0],
                title: "START",
                map: this.map,
            });
            this.startMarker.addListener("click", () => {
                this.poly.getPath().push(this.startMarker.getPosition());
            });
        } else {
            this.startMarker.setPosition(path[0]);
            this.startMarker.setMap(this.map);
        }
        
        if (this.poly.getPath().length){
            this.setState({emptyPath: false});
        } else {
            // Remove the start marker, and update state if the path is empty.
            this.startMarker.setMap(null);
            this.setState({ emptyPath: true });
        }
    }

    handleMapClick(e){
        const path = this.poly.getPath();
        path.push(e.latLng);
    }

}
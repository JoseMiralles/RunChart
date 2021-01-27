/**
 * FindRoutes - A component that searches for routes.
 * 
 * Routes are fetched whenever the map stops scrolling,
 * and it uses the SouthEast and NorthWest points as filters as well as a "name" query string.
 * 
 * Whenever the user preses "Search", the location input is used to re-center the map unto a new location.
 * The component then fetches all of the routes withing the view bounds of the map. And it also filters them using the name.
 */

import React from "react";
import { googleMapStyles } from "../../../scripts/googleMapsUtils";
import PredefinedLocationsButtons from "./predefined_locations_buttons";

export default class FindRoutes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: "test",
            location: "",
            locationInput: "",
            mapIsRendered: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.centerMapOnGivenPosition = this.centerMapOnGivenPosition.bind(this);
        this.setUpMap = this.setUpMap.bind(this);
        this.performSearch = this.performSearch.bind(this);
        this.searchMap = this.searchMap.bind(this);
    }

    render(){
        return(
            <div className="find-routes-container container">

                <div className="title-and-searchbox">
                    <h1>Find Routes</h1>

                    {/* Query search form */}
                    <form onSubmit={this.performSearch} className="flex-horizontal">
                        <label htmlFor="query-search-box">Search By Name</label>
                        <input id="query-search-box" onChange={this.handleChange}
                            key={"name"} type="text"
                            placeholder="Search by Name or Query"
                        />
                        <button className="btn btn-main">SEARCH</button>
                    </form>
                </div>
                
                <div className="search-map-wrapper">
                    {/* Map location search form */}
                    <form onSubmit={this.searchMap} className="flex-horizontal">
                        <label htmlFor="map-search-box">Near:</label>
                        <input id="map-search-box" type="text" placeholder="City, state, or zip"/>
                        <button className="btn btn-main">GO</button>
                    </form>

                    <div className="search-map" ref="map">
                    </div>
                </div>

                <PredefinedLocationsButtons
                    centerMapOnGivenPosition={this.centerMapOnGivenPosition}
                />

            </div>
        );
    }

    componentDidMount(){
        this.setUpMap(()=>{ // Calback gets called when the map is fully loaded.
            // Map is now loaded, update state.
            this.setState({mapIsRendered: true});

            // Center map on user's current location.
            navigator.geolocation.getCurrentPosition(this.centerMapOnGivenPosition);

            // Setup "idle" listener. This fires once the map stops moving.
            this.map.addListener("idle", this.performSearch);
        });
    }

    // This s
    searchMap(e){
        e.preventDefault();
    }

    handleChange(key){
        return (e) => {
            this.setState({ [key]: e.target.value });
        }
    }

    performSearch(e){
        e && e.preventDefault();
        // Re-center the map to the queried location, if one is given.
        const northEast = this.map.getBounds().getNorthEast();
        const southWest = this.map.getBounds().getSouthWest();
        const filters = {
            bounds:{
                northEast: { lat: northEast.lat(), lng: northEast.lng() },
                southWest: { lat:southWest.lat(), lng: southWest.lng() }
            }
        }
        if (this.state.name) filters.name = this.state.name;
        this.props.fetchRoutes(filters);
    }

    // Sets up and renders the map, and calls the callback once it's rendered.
    setUpMap(mapLoadedCallback) {
        // Setup map with options.
        const mapOptions = {
            center: {
                lat: 40.78151480597849,
                lng: -73.9667305095721
            }, // San Francisco coords
            zoom: 14,
            disableDefaultUI: true,
            // zoomControl: true,
            styles: googleMapStyles,
        };
        this.map = new google.maps.Map(this.refs.map, mapOptions);

        // Setup event listener to call the callback when the map is fully loaded.
        google.maps.event.addListenerOnce(this.map, 'tilesloaded', mapLoadedCallback);
    }

    centerMapOnGivenPosition(pos){
        const newLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(newLocation);
    }

}
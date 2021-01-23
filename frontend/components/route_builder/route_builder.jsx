import React, { useEffect } from "react";
import { loadGMaps, googleMapStyles } from "../../scripts/googleMapsUtils";

export default class RouteBuilder extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            GMapsLoaded: false,
            mapIsSetup: false,
            empty_path: true
        }

        this.handleMapClick = this.handleMapClick.bind(this);
    }

    render(){
        return(
            <div className="route-builder-container">

                <div className="messages">
                    <ul>
                        {this.state.empty_path && <li className="click-to-start">Click anywhere on the map to start.</li>}
                    </ul>
                </div>

                {/* Render The map controls only if the map is already setup. */}
                { this.state.mapIsSetup && this.renderMapControls() }
                
                <div className="map-container" ref="map"></div>

            </div>
        );
    }

    renderMapControls(){
        return(
            <h1>controls</h1>
        );
    }

    componentDidMount(){
        // Load the Google maps api, and then set GMapsLoaded to true.
        // This will cause componentDidUpdate() to be launched.
        
        loadGMaps(()=>{
            this.setState({GMapsLoaded: true});
        });
    }

    componentDidUpdate(){
        // Set up the map, if the Google maps api is loaded.
        if (this.state.GMapsLoaded && this.state.mapIsSetup === false)
            this.setUpMap();
    }
    

    setUpMap(){
        // Setup map with options.
        const mapOptions = {
            center: {
                lat: 40.78151480597849,
                lng: -73.9667305095721
            }, // San Francisco coords
            zoom: 14,
            disableDefaultUI: true,
            zoomControl: true,
            styles: googleMapStyles
        };
        this.map = new google.maps.Map(this.refs.map, mapOptions);

        // Initialize the polyline, and add it to the map.
        this.poly = new google.maps.Polyline({
            strokeColor: "#F15025",
            strokeOpacity: 1.0,
            strokeWeight: 7,
        });
        this.poly.setMap(this.map);

        // Add click event listener for the map.
        this.map.addListener("click", this.handleMapClick);

        // Set mapIsSetup to true to avoid re-rendering the map.
        this.setState({mapIsSetup: true});
    }

    handleMapClick(e){
        this.setState({empty_path: false});
        const path = this.poly.getPath();
        path.push(e.latLng);

        // Add a marker if this is the first point.
        if (path.length === 1) {
            new google.maps.Marker({
              position: e.latLng,
              title: "#" + path.getLength(),
              map: this.map,
            });
        }
    }

}
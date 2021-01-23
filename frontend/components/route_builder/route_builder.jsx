import React, { useEffect } from "react";
import loadGMaps from "../../scripts/load_g_maps";

export default class RouteBuilder extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            GMapsLoaded: false
        }
    }

    render(){
        return(
            <div className="route-builder-container">
                <div className="map-container" ref="map"></div>
            </div>
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
        if (this.state.GMapsLoaded) this.setUpMap();
    }
    


    setUpMap(){
        const mapOptions = {
            center: {
                lat: 37.773972,
                lng: -122.431297
            }, // San Francisco coords
            zoom: 13
        };
        this.map = new google.maps.Map(this.refs.map, mapOptions);
    }

}
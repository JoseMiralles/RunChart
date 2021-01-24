import React, { useEffect } from "react";
import { loadGMaps, googleMapStyles } from "../../scripts/googleMapsUtils";

export default class RouteBuilder extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            GMapsLoaded: false,
            mapIsSetup: false,
            emptyPath: true,
            totalMiles: 0
        }

        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleControlClick = this.handleControlClick.bind(this);
        this.polyPathChanged = this.polyPathChanged.bind(this);
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
                        <i className="material-icons" action="undo">undo</i>
                        <label action="undo">undo</label>
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
        // Load the Google maps api, and then set GMapsLoaded to true.
        // This will cause componentDidUpdate() to be launched.
        
        loadGMaps(()=>{
            this.setState({GMapsLoaded: true});
        });
    }

    componentDidUpdate(){
        // Set up the map, if the Google maps api is loaded, and it hasn't been setup yet..
        if (this.state.GMapsLoaded && this.state.mapIsSetup === false)
            this.setUpMap();
    }

    handleControlClick(e){
        switch(e.target.attributes.action.value){
            case "undo":
                this.poly.getPath().pop();
                break;
            case "clear":
                this.poly.getPath().clear();
                break;
            case "save":
                debugger
                break;
        }
        if (!this.poly.getPath().length){
            // Remove the start marker, and update state if the path is empty.
            this.startMarker.setMap(null);
            this.setState({ emptyPath: true });
        }
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
            // zoomControl: true,
            styles: googleMapStyles
        };
        this.map = new google.maps.Map(this.refs.map, mapOptions);

        // Initialize the polyline, and add it to the map.
        this.poly = new google.maps.Polyline({
            // strokeColor: "#F15025",
            strokeColor: this.props.mainColor,
            strokeOpacity: 1.0,
            strokeWeight: 7,
            editable: true
        });
        this.poly.setMap(this.map);

        // Listen to changes to the poliLine's path.
        google.maps.event.addListener(this.poly, "dragend", this.polyPathChanged);
        google.maps.event.addListener(this.poly.getPath(), "insert_at", this.polyPathChanged);
        google.maps.event.addListener(this.poly.getPath(), "remove_at", this.polyPathChanged);
        google.maps.event.addListener(this.poly.getPath(), "set_at", this.polyPathChanged);

        // Add click event listener for the map.
        this.map.addListener("click", this.handleMapClick);

        // Set mapIsSetup to true to avoid re-rendering the map.
        this.setState({mapIsSetup: true});
    }

    // Handles chanes to the polypath, and updates markers and miles.
    polyPathChanged(idx){
        const path = this.poly.getPath();
        this.setState({
            totalMiles: Number.parseFloat(
                google.maps.geometry.spherical.computeLength(path) / 1600
            ).toFixed(2)
        });

        if (!this.startMarker) {
            this.startMarker = new google.maps.Marker({
                position: path.Lb[0],
                title: "START",
                map: this.map,
            });
            this.startMarker.addListener("click", () => {
                this.poly.getPath().push(this.startMarker.getPosition());
            });
        } else {
            this.startMarker.setPosition(path.Lb[0]);
            this.startMarker.setMap(this.map);
        }
    }

    handleMapClick(e){
        this.setState({emptyPath: false});
        const path = this.poly.getPath();
        path.push(e.latLng);
    }

}
import React from "react";

export default class MapSearchBox extends React.Component {

    constructor(props) {
        super(props);

        this.map = props.map;
        this.service = props.service;

        // this.searchMap = this.searchMap.bind(this);
    }

    render() {
        return (
            <div className="map-search-box flex-horizontal">
                <label htmlFor="map-search-box">Near:</label>
                <input ref="locationSearchBox" id="map-search-box" type="text" placeholder="City, state, or zip" />
                {/* <button className="btn btn-main">GO</button> */}
            </div>
        );
    }

    componentDidMount(){
        this.input = this.refs.locationSearchBox;
        this.autocomplete = new google.maps.places.Autocomplete(this.input);
        this.autocomplete.setFields(["geometry"]);

        // Listen for when the user selects a place from the autocomplete list.
        this.autocomplete.addListener("place_changed",  function(){
            debugger
            const viewPort = this.autocomplete.getPlace().geometry.location;
            this.map.setCenter(viewPort);
        }.bind(this));
    }

    // This handles the map search box.
    // searchMap(e) {
    //     e.preventDefault();
    //     const request = {
    //         query: this.refs.locationSearchBox.value, // This is what has to change
    //         fields: ["geometry"]
    //     };
    //     this.service.findPlaceFromQuery(request, function (results, status) {
    //         if (status === google.maps.places.PlacesServiceStatus.OK) {
    //             debugger
    //             this.map.panToBounds(results[0].geometry.viewport)
    //         }
    //     }.bind(this));
    // }

}
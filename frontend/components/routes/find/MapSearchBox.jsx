import React from "react";

export default class MapSearchBox extends React.Component {

    constructor(props) {
        super(props);

        this.map = props.map;
        this.service = props.service;
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
        this.autocomplete.setFields(["geometry", "name"]);

        this.marker = new google.maps.Marker({
            map: this.map,
            title: ""
        });

        // Listen for when the user selects a place from the autocomplete list.
        this.autocomplete.addListener("place_changed",  function(){
            const place = this.autocomplete.getPlace();
            const position = place.geometry.location;

            this.marker.setTitle(place.name);
            this.marker.setLabel({
                color: "black",
                fontWeight: "bold",
                text: place.name
            })
            this.marker.setPosition(position);
            this.map.setCenter(position);
            debugger
        }.bind(this));
    }

}
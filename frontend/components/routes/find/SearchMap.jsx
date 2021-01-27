import React from "react";

export default class React extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="search-map-wrapper">

                {/* Map location search Box */}
                { this.state.mapIsRendered &&
                    <MapSearchBox
                        map={this.map}
                        service={this.service}
                    />
                }

                <div className="search-map" ref="map">
                </div>
            </div>
        );
    }

    

}
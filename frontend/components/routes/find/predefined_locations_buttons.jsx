import React from "react";

export default class PredefinedLocationsButtons extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return(
            <div onClick={this.handleClick} className="predefined-locations-buttons flex-horizontal">
                <button className="btn" value={[123,123]}>New York</button>

                <button className="btn" value={[123,123]}>San Fransisco</button>

                <button className="btn" value={[123,123]}>San Antonio</button>
            </div>
        );
    }

    handleClick(e){
        const coors = e.target.value.split(",").map(num => parseFloat(num));
    }

}
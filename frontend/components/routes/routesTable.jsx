import React from "react";
import { Link } from "react-router-dom";

export default class RoutesTable extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const mappedRoutes = this.mapRoutes(this.props.routes);
        return(
            <div className="routes-table">
                <table>
                    <thead>
                        <tr>
                            <th>Distance</th>
                            <th>Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {mappedRoutes}
                    </tbody>
                </table>
            </div>
        );
    }

    mapRoutes(routes) {
        return Object.values(routes).map(route => {
            const path = google.maps.geometry.encoding.decodePath(route.route);
            const distance = Number.parseFloat(
                google.maps.geometry.spherical.computeLength(path) / 1600
            ).toFixed(2);
            return (
                <tr key={route.id}>
                    <td>{distance} mi</td>
                    <td><Link to={`/routes/${route.id}`}>{route.name}</Link></td>
                    <td>{new Date(route.updatedAt).toLocaleDateString()}</td>
                </tr>
            )
        })
    }

}
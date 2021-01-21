import React from "react";

export default class DemoButton extends React.Component {

    constructor(props){
        super(props);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(e){
        this.props.login({
            username: "TimBernersLee",
            password: "123456"
        });
    }

    render(){
        return(
            <button className="btn btn-highlighted wide"
                onClick={this.handleDemoLogin}>
                {">> Login To Demo Account <<"}
            </button>
        )
    }

}
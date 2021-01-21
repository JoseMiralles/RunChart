import React from "react";

import DemoButtonContainer from "../session/demo_button_container";

export default class SessionForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="session-form-page">
                <div className="session-form-container">
                    <h1>{this.props.formType}</h1>

                    <hr></hr>

                    {this.renderErrors()}

                    <form onSubmit={this.handleSubmit}>

                        <label htmlFor="form-username">Username:</label>
                        <input id="form-username" type="text"
                            placeholder="Username"
                            //value={this.state.username}
                            onChange={this.handleChange("username")}
                        />

                        <label htmlFor="form-password">Password:</label>
                        <input id="form-password" type="password"
                            placeholder="Password"
                            //value={this.state.password}
                            onChange={this.handleChange("password")}
                        />

                        {this.renderExtraFields()}

                        <button className="btn btn-main wide" onClick={this.handleSubmit}>{this.props.formType}</button>

                        <hr/>

                        <DemoButtonContainer/>

                    </form>

                    <div className="toggle-link">
                        {this.props.toggleLink}
                    </div>

                </div>
            </div>
        );
    }

    componentWillUnmount(){
        this.props.clearSessionErrors();
    }

    renderErrors(){
        if (this.props.errors.length){
            return(
                <div className="errors-container">
                    <ul className="errors-list">
                        {this.props.errors.map((error, i) => 
                            <li key={i}>{error}</li>
                        )}
                    </ul>
                </div>
            );
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(
            Object.assign({}, this.state)
        );
    }

    handleChange(key){
        return (e) => {
            this.setState({
                [key]: e.target.value
            });
        }
    }

    // This returns the extra fields required by the "signup" form.
    renderExtraFields() {
        if (this.props.formType === "Sign Up") return (
                <>
                    <label htmlFor="form-email">Email:</label>
                    <input id="form-email" type="email"
                        placeholder="Email"
                        //value={this.state.email}
                        onChange={this.handleChange("email")}
                    />

                    <label htmlFor="form-firstName">First Name:</label>
                    <input id="form-firstName" type="text"
                        placeholder="First name"
                        //value={this.state.firstName}
                        onChange={this.handleChange("firstName")}
                    />

                    <label htmlFor="form-lastName">Last Name:</label>
                    <input id="form-lastName" type="text"
                        placeholder="Last name"
                        //value={this.state.lastName}
                        onChange={this.handleChange("lastName")}
                    />
                </>
        );
    }

}
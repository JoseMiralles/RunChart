import React from "react";

export default class SessionForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderErrors(){
        if (this.props.errors.length){
            return(
                <div className="errors-container">
                    <ul>
                        {this.renderErrors.map(error => 
                            <li>{error}</li>
                        )}
                    </ul>
                </div>
            );
        }
    }

    handleSubmit(e){
        debugger
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
    renderExtraFields(){
        if (this.props.formType === "Sign Up") return(
            <>
                    <label htmlFor="form-email">Email:</label>
                    <input id="form-email" type="email"
                    //value={this.state.email}
                    onChange={this.handleChange("email")}
                    />

                    <label htmlFor="form-first_name">First Name:</label>
                    <input id="form-first_name" type="text"
                    //value={this.state.first_name}
                    onChange={this.handleChange("first_name")}
                    />

                    <label htmlFor="form-last_name">Last Name:</label>
                    <input id="form-last_name" type="text"
                    //value={this.state.last_name}
                    onChange={this.handleChange("last_name")}
                    />
            </>
        );
    }

    render(){
        return(
            <div className="session-form-container">
                <h3>{this.props.formType}</h3>

                { this.renderErrors() }

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="form-username">Username:</label>
                    <input id="form-username" type="text"
                    //value={this.state.username}
                    onChange={this.handleChange("username")}
                    />

                    <label htmlFor="form-password">Password:</label>
                    <input id="form-password" type="password"
                    //value={this.state.password}
                    onChange={this.handleChange("password")}
                    />

                    {this.renderExtraFields()}

                    <button onClick={this.handleSubmit}>Submit</button>

                </form>

                <div className="toggle-link">
                    {this.props.toggleLink}
                </div>

            </div>
        );
    }

}
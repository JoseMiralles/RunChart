import React from "react";

export default class Footer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="footer-container container">
                <div>
                    <h4>RunChart</h4>
                    <ul>
                        <li>
                            <a href="https://github.com/JoseMiralles/final-project">Source Code</a>
                        </li>
                        <li>
                            <a href="https://github.com/JoseMiralles/final-project/wiki">Project Wiki</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Jose Miralles</h4>
                    <ul>
                        <li>
                            <a href="https://josemiralles.github.io/">Personal Site</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/josemiralles/">Linked In</a>
                        </li>
                        <li>
                            <a href="https://github.com/JoseMiralles">GitHub</a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/2895137/jose-miralles">Stack Overflow</a>
                        </li>
                    </ul>
                </div>
                <div className="logo-container">
                    <h3 className="logo flex-horizontal">
                        <i class="material-icons">near_me</i>
                        RunChart
                    </h3>
                </div>
            </div>
        );
    }

}
import React, { Component } from 'react';
import { connect } from 'react';

class header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div id="output-header">
                <header id="masthead">
                    <div className="container">
                        {/* <div classNameName="header-bar">
                            <a id="logo" href="https://www.valic.com/home" target="_self" title="us-corporate" onClick="https://www.valic.com/home" >
                                <img src="https://binaries.valic.com/content/dam/valic/america-canada/us-corporate/images/logos/logo.png" alt="us-corporate"></img>
                            </a>
                        </div> */}
                        <div id="menu-wrapper">
                        <nav className="navbar">
                      
                          <div className="navbar-header">
                          <a className="navbar-brand" id="logo" href="https://www.valic.com/home" target="_self" title="us-corporate" onClick="https://www.valic.com/home" >
                                <img src="https://binaries.valic.com/content/dam/valic/america-canada/us-corporate/images/logos/logo.png" alt="us-corporate"></img>
                            </a>
                          </div>
                          <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                              <li><a href="#">Page 1-1</a></li>
                              <li><a href="#">Page 1-2</a></li>
                              <li><a href="#">Page 1-3</a></li>
                            </ul>
                          </li>
                            <li><a href="#">Page 3</a></li>
                          </ul>
                    
                      </nav>
                        </div>
                    </div>
                </header>
            // </div>
        )
    }
}

export default header;
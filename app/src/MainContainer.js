import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/loginAuth';
//import Dashboard from './Secured';

class MainContainer extends Component {
    render() {
        if(this.props.isLoggedIn) {
            return <Login/>; //for now pointing to login as didn't create dashboard
        } else {
            return <Login/>;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(MainContainer);
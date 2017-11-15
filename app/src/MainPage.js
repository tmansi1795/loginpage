import React, { Component } from 'react';
import { connect } from 'react';
import Maincontainer from './MainContainer';
import MainHeader from './components/header';
import MainFooter from './components/footer';


class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <MainHeader />

                <Maincontainer />

                <MainFooter />

            </div>
        )
    }
}

export default MainPage;
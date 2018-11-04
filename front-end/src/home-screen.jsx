import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class HomeScreen extends Component {
    propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <div className="home-screen">
                <h2>{"Home Screen"}</h2>
            </div>
        );
    }
}
export {HomeScreen};
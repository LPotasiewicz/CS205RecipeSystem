import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Recipe extends Component {
    propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <div className="App">
                <h2>{"I suppose this is a recipe."}</h2>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
export {Recipe};
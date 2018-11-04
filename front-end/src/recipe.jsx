import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Recipe extends Component {
    propTypes = {
        text: PropTypes.string
    };

    _getMeData() {
        console.log("data got");
    }

    render() {
        return (
            <div className="recipe">
                <h2>{"I suppose this is a recipe."}</h2>
                <button onClick={this._getMeData}>{this.props.text}</button>
            </div>
        );
    }
}
export {Recipe};
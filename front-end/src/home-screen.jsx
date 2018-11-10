import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {RecipeList} from "./recipe-list";

class HomeScreen extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <div className="home-screen">
                <RecipeList/>

            </div>
        );
    }
}
export {HomeScreen};
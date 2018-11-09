import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class RecipeList extends Component {
    static propTypes = {
        recipes: PropTypes.string
    };

    render() {
        return (
            <div className="recipe-list">
                <h2>{"Recipe List"}</h2>
            </div>
        );
    }
}
export {RecipeList};
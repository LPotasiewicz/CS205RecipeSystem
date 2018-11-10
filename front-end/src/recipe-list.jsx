import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {RecipeHeader} from "./recipe-header";

class RecipeList extends Component {
    static propTypes = {
        recipes: PropTypes.string
    };

    render() {
        const recipes = ["recipe 1", "recipe 2", "recipe 3", "recipe 4", "recipe 5"];
        return (
            <div className="recipe-list">
                <h2>{"Recipe List"}</h2>
                {recipes.map((r)=>
                    <RecipeHeader title={r}/>
                )}
            </div>
        );
    }
}
export {RecipeList};
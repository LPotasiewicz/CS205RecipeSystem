import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {RecipeHeader} from "./recipe-header";

class RecipeList extends Component {
    static propTypes = {
        recipes: PropTypes.array,
        changePage: PropTypes.func
    };

    render() {
        const recipes = this.props.recipes || [] ;
        return (
            <div className="recipe-list">
                <h2>{"Recipe List"}</h2>
                {recipes ? recipes.map((r, i)=>
                    <RecipeHeader recipeHeader={r} key={r.title + i} changePage={this.props.changePage}/>
                ) : null}
            </div>
        );
    }
}
export {RecipeList};
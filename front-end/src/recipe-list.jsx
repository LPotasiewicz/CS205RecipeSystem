import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {RecipeHeader} from "./recipe-header";

class RecipeList extends Component {
    static propTypes = {
        title: PropTypes.string,
        recipes: PropTypes.array,
        changePage: PropTypes.func,
        exclusionIds: PropTypes.array
    };

    render() {
        const recipes = this.props.recipes || [] ;
        return (
            <div className="recipe-list">
                <h2>{this.props.title || "Recipe List"}</h2>
                {recipes ? recipes.map((r, i)=>
                    (this.props.exclusionIds || []).indexOf(r.id) ?
                        <RecipeHeader recipeHeader={r} key={r.title + i} changePage={this.props.changePage}/> :
                        null
                ) : null}
            </div>
        );
    }
}
export {RecipeList};
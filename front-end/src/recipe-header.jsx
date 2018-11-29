import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {pages, partial} from "./App";

class RecipeHeader extends Component {
    static propTypes = {
        recipeHeader: PropTypes.object,
        changePage: PropTypes.func
    };

    render() {
        const recipeHeader = this.props.recipeHeader || {};
        return (
            <button className="recipe-header" onClick={partial(
                this.props.changePage,
                pages.recipe,
                {recipeId: recipeHeader.id}
            )}>
                <h3>{recipeHeader.title}</h3>
                <h4>{recipeHeader.author}</h4>
                <p>{recipeHeader.cook_time}</p>
                <img
                    src={recipeHeader.img_url}
                    alt={"recipe"}
                />
            </button>
        );
    }
}

export {RecipeHeader};
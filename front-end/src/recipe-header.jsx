// **************************
// Owned by: Luke Potasiewicz
// **************************
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {appState, pages, partial} from "./App";
import {deleteRecipe, getRecipes} from "./actions";

class RecipeHeader extends Component {
    static propTypes = {
        recipeHeader: PropTypes.object,
        changePage: PropTypes.func
    };

    render() {
        const recipeHeader = this.props.recipeHeader || {};
        return (
            <button className="recipe-header" >
                <div className={"header-image-wrapper"}>
                    <img
                        src={recipeHeader.img_url || "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg"}
                        alt={"recipe"}
                        onClick={partial(
                            this.props.changePage,
                            pages.recipe,
                            {recipe: recipeHeader}
                        )}
                    />
                </div>
                <h3>{recipeHeader.title || "--"}</h3>
                <p className={"header-label"}>{"Author:"}</p>
                <h4>{recipeHeader.author || "--"}</h4><br/>
                <p className={"header-label"}>{"Cook Time:"}</p>
                <p>{recipeHeader.cook_time || "--"}</p>
                {
                    // only show the delete button when the other of the post is logged in
                    appState.name === recipeHeader.author
                        ? <button
                            onClick={() => {
                                deleteRecipe(recipeHeader.id);
                                getRecipes();
                            }
                            }
                            className={"delete-button"}
                        >X</button>
                        : null
                }
            </button>
        );
    }
}

export {RecipeHeader};
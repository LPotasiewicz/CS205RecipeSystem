import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {getRecipes} from "./actions";
import {store} from "./store";
import {RecipeList} from "./recipe-list";

class Recipe extends Component {
    static propTypes = {
        recipeId: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.dataListenerRecipe = this.dataListenerRecipe.bind(this);
        this.dataListenerRecipes = this.dataListenerRecipes.bind(this);
        store.listen("recipes", this.dataListenerRecipes);
        store.listen("recipe" + props.recipeId, this.dataListenerRecipe);
    }

    dataListenerRecipe(data) {
        this.setState({recipe: data})
    }

    dataListenerRecipes(data) {
        this.setState({recipes: data})
    }

    componentDidMount() {
        getRecipes();
    }

    render() {
        const recipes = this.state.recipes || [];
        const recipe = this.state.recipe || {};
        return (
            <div className="recipe">
                <section className={"recipe-info"}>
                    <div className={"recipe-title-area"}>
                        <h2>{recipe.title || "--"}</h2>
                        <p className={"author"}>{recipe.author || "--"}</p>
                    </div>
                    <div className={"img-container"}>
                        <img
                            src={"https://i.imgflip.com/1ujwer.jpg"}
                            alt={"Recipe"}
                        />
                    </div>
                    <h4>{"Cook Time:"}</h4>
                    <p className={"cook-time"}>{recipe.cook_time || "--"}</p>
                    <h4 className={"ingredients"}>{"Ingredients:"}</h4>
                    {(recipe.ingredients || []).map((ing) =>
                        <p className={"ingredient"}>{ing}</p>
                    )}
                    <h4 className={"instructions"}>{"Instructions:"}</h4>
                    {(recipe.ingredients || []).map((ing) =>
                        <p className={"ingredient"}>{ing}</p>
                    )}
                </section>
                <section className={"Related-recipes"}>
                    <h4>{"Other recipes by this user:"}</h4>
                    <RecipeList recipes={recipes}/>
                </section>
            </div>
        );
    }
}

export {Recipe};
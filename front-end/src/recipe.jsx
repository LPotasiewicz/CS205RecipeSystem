import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {getRecipeUser} from "./actions";
import {store} from "./store";
import {RecipeList} from "./recipe-list";

class Recipe extends Component {
    static propTypes = {
        recipe: PropTypes.object,
        changePage: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.dataListenerUserRecipes = this.dataListenerUserRecipes.bind(this);
        store.listen("recipeUser", this.dataListenerUserRecipes);
    }

    dataListenerUserRecipes(data) {
        this.setState({recipes: data});
    }

    componentDidMount() {
        getRecipeUser(this.props.recipe.userId);
    }

    render() {
        const recipes = this.state.recipes || [];
        const recipe = this.props.recipe || {};
        return (
            <div className="recipe">
                <section className={"recipe-info"}>
                    <div className={"recipe-title-area"}>
                        <h2>{recipe.title || "--"}</h2>
                        <p className={"author"}>{recipe.author || "--"}</p>
                        <h4>{"Cook Time:"}</h4>
                        <p className={"cook-time"}>{recipe.cook_time || "--"}</p>
                        <h4 className={"ingredients"}>{"Ingredients:"}</h4>
                        {(recipe.ingredients || []).map((ins, i) =>
                            <p className={"ingredient"} key={ins + i}>{ins}</p>
                        )}
                        <h4 className={"instructions"}>{"Instructions:"}</h4>
                        {(recipe.ingredients || []).map((ing, i) =>
                            <p className={"ingredient"} key={ing + i}>{ing}</p>
                        )}
                    </div>
                    <div className={"img-container"}>
                        <img
                            src={recipe.img_url || ""}
                            alt={"Recipe"}
                        />
                    </div>
                    <section className={"recipe-details"}>

                    </section>
                </section>
                <section className={"Related-recipes"}>
                    <h4>{"Other recipes by this user:"}</h4>
                    <RecipeList recipes={recipes} changePage={this.props.changePage}/>
                </section>
            </div>
        );
    }
}

export {Recipe};
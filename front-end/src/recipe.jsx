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

    componentDidMount(){
        getRecipes();
    }

    render() {
        const recipes = this.state.recipes || [];
        return (
            <div className="recipe">
                <section className={"recipe-info"}>
                    <h2>{recipes.title}</h2>
                    <p className={"author"}>{recipes.author}</p>
                    <img
                        src={"https://i.imgflip.com/1ujwer.jpg"}
                        alt={"Recipe"}
                    />
                    <p className={"description"}>{"Description"}</p>
                    <p className={"ingredients"}>{"Recipe Ingredients"}</p>
                    <p className={"instructions"}>{"Recipe Instructions"}</p>
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
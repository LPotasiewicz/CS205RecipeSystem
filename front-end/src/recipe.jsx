import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {RecipeHeader} from "./recipe-header";
import {getRecipes} from "./actions";
import {store} from "./store";

class Recipe extends Component {
    static propTypes = {
        recipeId: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.dataListener = this.dataListener.bind(this);
        store.listen("recipes", this.dataListenerRecipe);
        store.listen("recipe" + props.recipeId, this.dataListenerRecipes);
    }

    dataListenerRecipe(data) {
        this.setState({recipes: data})
    }
    dataListenerRecipes(data) {
        this.setState({recipes: data})
    }

    componentDidMount(){
        getRecipes();
    }

    render() {
        const recipes = this.state.recipes;
        return (
            <div className="recipe">
                <section className={"recipe-info"}>
                    <h2>{"Recipe Title"}</h2>
                    <p className={"author"}>{"Author"}</p>
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
                    {recipes.map((r, i)=>
                        <RecipeHeader title={r} key={r + i}/>
                    )}
                </section>
                <button onClick={this._getMeData}>click me for data</button>
            </div>
        );
    }
}
export {Recipe};
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getRecipeUser} from "./actions";
import {store} from "./store";
import {RecipeList} from "./recipe-list";

class Recipe extends Component {
    static propTypes = {
        recipe: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.dataListenerUserRecipes = this.dataListenerUserRecipes.bind(this);
    }

    dataListenerUserRecipes(data) {
        this.setState({recipes: data});
    }

    componentDidMount() {
        store.listen("recipeUser" + this.props.recipe.userId, this.dataListenerUserRecipes);
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
                        <p className={"author"}>{"Added by: "}{ recipe.author || "--"}</p>
                        <h4>{"Cook Time:"}</h4>
                        <p className={"cook-time"}>{recipe.cook_time || "--"}</p>
                        <h4 className={"ingredients"}>{"Ingredients:"}</h4>
                        <ol>
                            {(recipe.ingredients || []).map((ins, i) =>
                                <li className={"ingredient"} key={ins + i}>{ins}</li>
                            )}
                        </ol>
                        <h4 className={"instructions"}>{"Instructions:"}</h4>
                        <ul>
                            {(recipe.steps || []).map((ing, i) =>
                                <li className={"step"} key={ing + i}>{ing}</li>
                            )}
                        </ul>
                    </div>
                    <div className={"img-container"}>
                        <img
                            src={recipe.img_url || "https://i.imgflip.com/1ujwer.jpg"}
                            alt={"Recipe"}
                        />
                    </div>
                    <section className={"recipe-details"}>

                    </section>
                </section>
                <section className={"related-recipes"}>
                    <h4>{"Other recipes by this user:"}</h4>
                    <RecipeList
                        recipes={recipes}
                        changePage={this.props.changePage}
                        title={" "}
                        exclusionIds={[recipe.id]}
                    />
                </section>
            </div>
        );
    }
}

export {Recipe};
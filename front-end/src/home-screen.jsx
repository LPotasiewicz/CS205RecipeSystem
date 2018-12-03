import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {RecipeList} from "./recipe-list";
import {store} from "./store";
import {getRecipes} from "./actions";

class HomeScreen extends Component {
    static propTypes = {
        text: PropTypes.string,
        changePage: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.dataListenerRecipes = this.dataListenerRecipes.bind(this);
        store.listen("recipes", this.dataListenerRecipes);
    }

    dataListenerRecipes(data) {
        this.setState({recipes: data})
    }

    componentDidMount(){
        getRecipes();
    }

    render() {
        return (
            <div className="home-screen">
                <RecipeList recipes={this.state.recipes} changePage={this.props.changePage} title={"All Recipes"}/>

            </div>
        );
    }
}
export {HomeScreen};
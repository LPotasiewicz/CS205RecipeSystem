import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {RecipeList} from "./recipe-list";
import {store} from "./store";
import {getRecipes} from "./actions";
import {Spinner} from "./spinner";

class HomeScreen extends Component {
    static propTypes = {
        text: PropTypes.string,
        changePage: PropTypes.func,
        searchTerm: PropTypes.string
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

    componentDidMount() {
        getRecipes();
    }

    componentWillReceiveProps(nextProps) {
        const localRecipes = (this.state.recipes || []).filter((r) =>
            JSON.stringify(r).toUpperCase().includes((nextProps.searchTerm || "").toUpperCase())
        );
        this.setState({exclusionIds: localRecipes.map((r) => r.id), localRecipes});
    }

    render() {
        return (
            <div className="home-screen">
                {
                    this.state.recipes ? null : <Spinner/>
                }
                <RecipeList
                    recipes={this.state.localRecipes || this.state.recipes}
                    changePage={this.props.changePage}
                    title={"All Recipes"}
                />
            </div>
        );
    }
}

export {HomeScreen};
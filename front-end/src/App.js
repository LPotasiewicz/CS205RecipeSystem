import React, {Component} from 'react';
import './App.css';
import {Recipe} from "./recipe";
import {HomeScreen} from "./home-screen";
import {Nav} from "./nav";
import {TopBar} from "./top-bar";
import {AddARecipe} from "./add-a-recipe";

export const pages = {
    home: "Home",
    recipe: "Recipe",
    addARecipe: "Add A Recipe"
};

export function partial(fn /*, args...*/) {
    // A reference to the Array#slice method.
    const slice = Array.prototype.slice;
    // Convert arguments object to an array, removing the first argument.
    const args = slice.call(arguments, 1);

    return function() {
        // Invoke the originally-specified function, passing in all originally-
        // specified arguments, followed by any just-specified arguments.
        return fn.apply(this, args.concat(slice.call(arguments, 0)));
    };
}

class App extends Component {

    constructor(props){
        super(props);
        this.state = {page: pages.home};
        this.changePage = this.changePage.bind(this);
    }

    _getPage() {
        switch(this.state.page) {
            case(pages.home):
                return(<HomeScreen changePage={this.changePage}/>);
            case(pages.recipe):
                return(<Recipe {...this.state.pageProps}/>);
            case(pages.addARecipe):
                return(<AddARecipe/>);
            default:
                return (<h1>{"How did you get here"}</h1>)
        }
    }

    changePage(option, pageProps = {}) {
        this.setState({page: option, pageProps})
    }

    render() {
        return (
            <div className="app">
                <TopBar/>
                <Nav navOptions={[pages.home, pages.addARecipe]} changePage={this.changePage}/>
                {this._getPage()}
            </div>
        );
    }
}

export default App;
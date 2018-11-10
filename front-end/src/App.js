import React, {Component} from 'react';
import './App.css';
import {Recipe} from "./recipe";
import {HomeScreen} from "./home-screen";
import {Nav} from "./nav";
import {TopBar} from "./top-bar";

export const pages = {
    home: "Home",
    recipe: "Recipe"
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
                return(<HomeScreen/>);
            case(pages.recipe):
                return(<Recipe/>);
            default:
                return (<h1>{"How did you get here"}</h1>)
        }
    }

    changePage(option) {
        this.setState({page: option})
    }

    render() {
        return (
            <div className="App">
                <TopBar/>
                <h1>{"App"}</h1>
                <Nav navOptions={[pages.home, pages.recipe]} changePage={this.changePage}/>
                {this._getPage()}
            </div>
        );
    }
}

export default App;
import React, {Component} from 'react';
import './App.css';
import {Recipe} from "./recipe";
import {HomeScreen} from "./home-screen";
import {Nav} from "./nav";
import {TopBar} from "./top-bar";
import {AddARecipe} from "./add-a-recipe";
import {Login} from "./login";
import {SignUp} from "./sign-up";

export const pages = {
    home: "Home",
    recipe: "Recipe",
    addARecipe: "Add A Recipe",
    login: "Login",
    signUp: "Sign Up"
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

export const appState = {
    email:"",
    id:"",
    name:"",
    password:""
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = {page: pages.home};
        this.changePage = this.changePage.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    updateSearch (searchTerm) {
        this.setState({searchTerm});
    }

    logOut() {
        appState.name = "";
        appState.email = "";
        appState.id = "";
        appState.password = "";
        this.setState({});
    }

    _getPage() {
        switch(this.state.page) {
            case(pages.home):
                return(<HomeScreen changePage={this.changePage} searchTerm={this.state.searchTerm}/>);
            case(pages.recipe):
                return(<Recipe {...this.state.pageProps} changePage={this.changePage}/>);
            case(pages.addARecipe):
                return(<AddARecipe/>);
            case(pages.login):
                return(<Login changePage={this.changePage}/>);
            case(pages.signUp):
                return(<SignUp changePage={this.changePage}/>);
            default:
                return (<h1>{"How did you get here"}</h1>)
        }
    }

    changePage(option, pageProps = {}) {
        this.setState({page: option, pageProps})
    }

    render() {
        console.log(appState);
        const navOptions = !appState.email ? [pages.home, pages.addARecipe, pages.login, pages.signUp]
            : [pages.home, pages.addARecipe];
        return (
            <div className="app">
                <TopBar updateSearch={this.updateSearch}/>
                <Nav
                    navOptions={navOptions}
                    changePage={this.changePage}
                    name={appState.name}
                    logOut={this.logOut}/>
                {this._getPage()}
            </div>
        );
    }
}

export default App;
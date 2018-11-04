import React, {Component} from 'react';
import './App.css';
import {Recipe} from "./recipe";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>{"What a recipe system we have here."}</h1>
                <Recipe text={"click me"}/>
            </div>
        );
    }
}

export default App;
import React, {Component} from 'react';
import './App.css';
import {Recipe} from "./recipe";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>{"What a recipe system we have here."}</h1>
                <Recipe/>
                <Recipe text={"heya"}/>
                <Recipe text={<Recipe text={"heyo"}/>}/>
            </div>
        );
    }
}

export default App;
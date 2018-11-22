import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {RecipeHeader} from "./recipe-header";

class Recipe extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    _getMeData() {
        const Http = new XMLHttpRequest();
        const url = 'https://perfect-seahorse-89.localtunnel.me/users';
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
        }
    }

    render() {
        const recipes = ["recipe 1", "recipe 2", "recipe 3", "recipe 4", "recipe 5"];
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
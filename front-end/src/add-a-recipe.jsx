import React, {Component} from 'react';
import './App.css';
import {partial} from "./App";

class AddARecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payload: {
                title: "",
                author: "",
                cook_time: "",
                img_url: "",
                ingredients: [""],
                steps: [""]
            }
        };
        this._createInput = this._createInput.bind(this);
        this._createInputList = this._createInputList.bind(this);
    }

    _createInput(target) {
        return <input type="text" value={this.state.payload[target]} onChange={
            partial(
                (t, event) => {
                    const localPayload = this.state.payload;
                    localPayload[t] = event.target.value;
                    this.setState({localPayload});
                }, target)
        }/>
    }

    _createInputList(target) {
        if (this.state.payload[target].slice(-1)[0] !== "") {
            const localPayload = this.state.payload;
            localPayload[target].push("");
            this.setState({localPayload});
        }
        return this.state.payload[target].map((element, i) => (
            <input type="text" value={element} onChange={
                partial(
                    (t, event) => {
                        const localPayload = this.state.payload;
                        localPayload[t][i] = event.target.value;
                        this.setState({localPayload});
                    }, target)
            }/>))
    }

    render() {
        return (
            <div className="add-a-recipe">
                <form>
                    Name:
                    {this._createInput("title")}
                    <br/>
                    Time to Cook:
                    {this._createInput("cook_time")}
                    <br/>
                    Image:
                    <input type="file"/>
                    <br/>
                    <section>
                        Ingredients:
                        <br/>
                        {this._createInputList("ingredients")}
                        <br/>
                        Steps:
                        <br/>
                        {this._createInputList("steps")}
                    </section>
                </form>
            </div>
        );
    }
}

export {AddARecipe};
import React, {Component} from 'react';
import './App.css';
import {partial} from "./App";
import {postRecipe} from "./actions";

class AddARecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            payload: {
                title: "",
                cook_time: "",
                img_url: "",
                ingredients: [""],
                steps: [""],
                userId: "0"
            }
        };
        this._submit = this._submit.bind(this);
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

    _submit() {
        postRecipe(this.state.payload);
        this.setState({submitted: true});
    }

    _createInputList(target) {
        if (this.state.payload[target].slice(-1)[0] !== "") {
            const localPayload = this.state.payload;
            localPayload[target].push("");
            this.setState({localPayload});
        }
        return this.state.payload[target].map((element, i) => (
            <div key={i}>
                <input type="text" value={element} onChange={
                    partial(
                        (t, event) => {
                            const localPayload = this.state.payload;
                            localPayload[t][i] = event.target.value;
                            this.setState({localPayload});
                        }, target)
                }/>
                {this.state.payload[target].length - 1 !== i ?
                    <button onClick={
                        partial(
                            (t) => {
                                const localPayload = this.state.payload;
                                localPayload[t].splice(i, 1);
                                this.setState({localPayload});
                            }, target)

                    }>X</button> : null
                }
            </div>))
    }

    render() {
        if (this.state.submitted) {
            return (
                <div className="add-a-recipe">
                    <div className={""}>
                        {"Your recipe has been submitted."}
                    </div>
                </div>
            );
        }
        return (
            <div className="add-a-recipe">
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
                <button className={"goButton"} onClick={this._submit}>Submit</button>
            </div>
        );
    }
}

export {AddARecipe};
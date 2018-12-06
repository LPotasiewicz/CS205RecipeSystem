// **************************
// Owned by: Devon Havers, Luke Potasiewicz
// **************************
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {postUser} from "./actions";
import {pages} from "./App";

// this hash function is from https://gist.github.com/iperelivskiy/4110988, written by bryc
export const hash = (s) => {
    let h=1;
    for(let i=0; i<s.length; i++)
        h=Math.imul(h+s.charCodeAt(i)|0, 2654435761);
    return (h^h>>>17)>>>0;
};

class SignUp extends Component {
    static propTypes = {
        changePage: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.signUp = this.signUp.bind(this);
    }

    signUp() {
        postUser({
            name: this.state.name,
            email: this.state.email,
            password: hash(this.state.password)
        });
        this.props.changePage(pages.login)
    }

    creteInput(type, value, placeHolder) {
        return <input
            type={type}
            name={value}
            placeholder={placeHolder}
            value={this.state[value]}
            onChange={(event) => {
                this.setState({[value]: event.target.value});
            }
            }/>
    }

    render() {
        return (
            <div className="sign-up">
                <div className={"login-banner"}>
                    <h2>Sign Up</h2>
                </div>
                <label>
                    {this.creteInput("text", "name", "Name")}
                </label>
                <br/>
                <label>
                    {this.creteInput("text", "email", "Email")}
                </label>
                <br/>
                <label>
                    {this.creteInput("password", "password", "Password")}
                </label>
                <br/>
                <label>
                    {this.creteInput("password", "confirmPassword", "Confirm Password")}
                </label>
                <br/>
                <button
                    className="submit"
                    onClick={this.signUp}
                    disabled={
                        !(!!this.state.name &&
                        !!this.state.email &&
                        !!this.state.password &&
                        !!this.state.confirmPassword &&
                        this.state.password === this.state.confirmPassword)
                    }
                >Sign Up
                </button>
            </div>
        );
    }
}

export {SignUp};
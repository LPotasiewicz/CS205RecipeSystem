import React, {Component} from 'react';
import './App.css';
import {store} from "./store";
import {getUserByEmail} from "./actions";
import PropTypes from "prop-types";
import {appState, pages} from "./App";
import {hash} from "./sign-up";

class Login extends Component {
    static propTypes = {
        changePage: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.dataListenerUser = this.dataListenerUser.bind(this);
        this.login = this.login.bind(this);
    }

    dataListenerUser(data) {
        appState.name = data.name;
        appState.email = data.email;
        appState.id = data.id;
        appState.password = data.password;
        if (data.password === hash(this.state.password))
            this.props.changePage(pages.home);
        else
            this.setState({loginFail: true})
    }

    login() {
        store.listen("user" + this.state.email, this.dataListenerUser);
        getUserByEmail(this.state.email);
    }

    render() {
        return (
            <div className="login">
                <h2>Login</h2>
                <label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(event) => {
                            this.setState({email: event.target.value});
                        }
                        }/>
                </label>
                <br/>
                <label>
                    <input type="password"
                           name="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={(event) => {
                               this.setState({password: event.target.value});
                           }
                           }/>
                </label>
                <br/>
                {
                    this.state.loginFail ? <pre>{"X Incorrect Email or Password"}</pre> : null
                }
                <button className="submit" onClick={this.login}>Login</button>
            </div>
        );
    }
}

export {Login};
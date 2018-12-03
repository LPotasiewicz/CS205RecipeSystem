import React, {Component} from 'react';
import './App.css';

class Login extends Component {

    render() {
        return (
            <div className="login">
                <form>
                    <h2>Login</h2>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}
export {Login};
import React, {Component} from 'react';
import './App.css';

class Login extends Component {

    render() {
        return (
            <div className="login">
                <form>
                    <h2>Login</h2>
                    <label>
                        <input type="email" name="email" placeholder="Email" />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="password" placeholder="Password" />
                    </label>
                    <br />
                    <input className="submit" type="submit" value="Login" />
                </form>
            </div>
        );
    }
}
export {Login};
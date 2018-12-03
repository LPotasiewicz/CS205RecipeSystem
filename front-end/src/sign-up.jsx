import React, {Component} from 'react';
import './App.css';

class SignUp extends Component {

    render() {
        return (
            <div className="sign-up">
                <form>
                    <h2>Sign Up</h2>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <br />
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
                    <label>
                        Confirm Password:
                        <input type="email" name="confirmPassword" />
                    </label>
                    <br />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}
export {SignUp};
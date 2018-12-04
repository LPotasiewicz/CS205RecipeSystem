import React, {Component} from 'react';
import './App.css';

class SignUp extends Component {

    render() {
        return (
            <div className="sign-up">
                <form>
                    <h2>Sign Up</h2>
                    <label>
                        <input type="text" name="name" placeholder="Name" />
                    </label>
                    <br />
                    <label>
                        <input type="email" name="email" placeholder="Email" />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="password" placeholder="Password" />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="confirmPassword" placeholder="Confirm Password" />
                    </label>
                    <br />
                    <input className="submit" type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}
export {SignUp};
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {partial} from "./App";

class Nav extends Component {
    static propTypes = {
        navOptions: PropTypes.array,
        changePage: PropTypes.func
    };

    render() {
        return (
            <div className="nav">
                {this.props.navOptions.map((option)=>(
                    <button key={option} onClick={partial(this.props.changePage, option)}>{option}</button>
                ))}
            </div>
        );
    }
}
export {Nav};
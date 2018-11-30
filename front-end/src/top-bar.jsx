import React, {Component} from 'react';
import './App.css';

class TopBar extends Component {

    render() {
        return (
            <div className="top-bar">
                <h2>{"Millennial Recipe System"}</h2>
                <input type="text" placeholder="Search..."/>
                <button>{"🔎"}</button>
            </div>
        );
    }
}
export {TopBar};
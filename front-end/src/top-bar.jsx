import React, {Component} from 'react';
import './App.css';

class TopBar extends Component {

    render() {
        return (
            <div className="top-bar">
                <h2>{"Millennial Recipe System"}</h2>
                <input type="text" placeholder="Search..."/>
                <button><img
                    src={"http://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/500px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"}
                    alt={"Search Icon"}
                    />
                </button>
            </div>
        );
    }
}
export {TopBar};
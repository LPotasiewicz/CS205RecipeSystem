import React, {Component} from 'react';
import './App.css';

class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <img src={"load1.gif"} alt={"spinner"}/>
            </div>
        );
    }
}

export {Spinner};
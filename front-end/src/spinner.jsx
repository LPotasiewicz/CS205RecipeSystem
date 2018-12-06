import React, {Component} from 'react';
import './App.css';

class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <img src={"https://loading.io/spinners/wave/lg.wave-ball-preloader.gif"} alt={"spinner"}/>
            </div>
        );
    }
}

export {Spinner};
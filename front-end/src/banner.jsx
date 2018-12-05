import React, {Component} from 'react';
import './App.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img src={require("./homeBanner.jpg")} alt={"Banner"} />
            </div>
        );
    }
}

export {Banner};
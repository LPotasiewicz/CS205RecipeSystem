// **************************
// Owned by: Luke Potasiewicz
// **************************
import React, {Component} from 'react';

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
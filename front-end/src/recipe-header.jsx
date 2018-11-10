import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class RecipeHeader extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    render() {
        return (
            <div className="recipe-header">
                <h3>{this.props.title}</h3>
                <h4>{"Author"}</h4>
                <p>{"Description of recipe 2018 (not clickbait) (cops called)"}</p>
                <img
                    src={"//lh4.googleusercontent.com/-ca8EQoEIcBo/AAAAAAAAAAI/AAAAAAAAECw/VugnJIvzv6U/s50-c-k-no/photo.jpg"}
                    alt={"recipe"}
                />
            </div>
        );
    }
}
export {RecipeHeader};
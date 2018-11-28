import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class RecipeHeader extends Component {
    static propTypes = {
        recipeHeader: PropTypes.object
    };

    render() {
        const recipeHeader = this.props.recipeHeader || {};
        return (
            <div className="recipe-header">
                <h3>{recipeHeader.title}</h3>
                <h4>{recipeHeader.author}</h4>
                <p>{recipeHeader.cook_time}</p>
                <img
                    src={recipeHeader.img_url}
                    alt={"recipe"}
                />
            </div>
        );
    }
}
export {RecipeHeader};
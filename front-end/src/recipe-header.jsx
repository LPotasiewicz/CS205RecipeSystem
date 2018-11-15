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
                <p>{"Description of recipe"}</p>
                <img
                    src={"https://1.bp.blogspot.com/-O0cI_U3LsOw/Wrr0f6muv9I/AAAAAAABZ1w/-G6OaCph4DYaVwdDzNljQ_C2v7criod5ACLcBGAs/s1600/IMG_1205-avocado-toast-cumin-citrus-salt-recipe--best-.png"}
                    alt={"recipe"}
                />
            </div>
        );
    }
}
export {RecipeHeader};
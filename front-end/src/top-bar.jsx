import React, {Component} from 'react';
import './App.css';
import PropTypes from "prop-types";

class TopBar extends Component {
    static propTypes = {
        updateSearch: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {searchTerm: ""};
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        this.setState({searchTerm: event.target.value});
        this.props.updateSearch(event.target.value);
    }

    render() {
        return (
            <div className="top-bar">
                <h2>{"Millennial Recipe System"}</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={this.handleSearchChange}
                    value={this.state.searchTerm}
                />
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
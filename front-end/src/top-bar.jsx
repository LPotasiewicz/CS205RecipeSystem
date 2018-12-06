import React, {Component} from 'react';
import PropTypes from "prop-types";
import {pages} from "./App";

class TopBar extends Component {
    static propTypes = {
        updateSearch: PropTypes.func,
        page: PropTypes.string
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
        if (this.props.page === pages.home) {
            return (
                <div className="top-bar">
                    <input
                        type="text"
                        placeholder="Filter..."
                        onChange={this.handleSearchChange}
                        value={this.state.searchTerm}
                    />
                    {/*<button><img*/}
                        {/*src={"http://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/500px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"}*/}
                        {/*alt={"Search Icon"}*/}
                    {/*/>*/}
                    {/*</button>*/}
                </div>
            );
        }
        return (
            <div className="top-bar">
            </div>
        );
    }
}
export {TopBar};
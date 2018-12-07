// **************************
// Owned by: Luke Potasiewicz
// **************************
import React from 'react';

class Store extends React.Component {
    constructor(props) {
        super(props);
        this._data = {};
        this.listeners = [];
    }

    // update all listening components
    // with the current data
    yell(id) {
        this.listeners[id](this._data[id]);
    }

    // update data, and yell
    add(id, data) {
        this._data[id] = data;
        this.yell(id);
    }

    // register a function to listen for a yell
    listen(id, callback){
        this.listeners[id] = callback;
    }
}

const store = new Store();
export {store};
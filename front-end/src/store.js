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

    yell(id) {
        this.listeners[id](this._data[id]);
    }

    add(id, data) {
        this._data[id] = data;
        this.yell(id);
    }

    listen(id, callback){
        this.listeners[id] = callback;
    }
}

const store = new Store();
export {store};
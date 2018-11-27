import React from 'react';

class Store extends React.Component {
    constructor(props) {
        super(props);
        this._data = {};
        this.listeners = [];
    }

    add(id, data) {
        this._data[id] = data;
        this.listeners[id](data);
    }

    listen(id, callback){
        this.listeners[id] = callback;
    }
}

const store = new Store();
export {store};
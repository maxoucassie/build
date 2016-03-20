import ReactDOM from 'react-dom';
import React from 'react';
import HelloWorld from './helloWorld';

const lib = {
    helloWorld: <HelloWorld />
};

ReactDOM.render(<HelloWorld />, document.getElementById('main'));

module.exports = lib;
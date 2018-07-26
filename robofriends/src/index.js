import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import Hello from './Hello.js';
//import Card from './Card.js';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();

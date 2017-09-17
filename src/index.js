import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Lunch from './Lunch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Lunch />, document.getElementById('content'));
registerServiceWorker();

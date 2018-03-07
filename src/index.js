import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import BiblioApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><BiblioApp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

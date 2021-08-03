import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/App/App';
import './index.css';
import { Router } from 'react-router';
import {createBrowserHistory} from 'history';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory} >
    <App />
  </Router>,
  document.getElementById('root')
)
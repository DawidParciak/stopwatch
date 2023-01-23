import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

import './styles/normalize.scss';
import './styles/global.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import StoreProvider from '../src/Context/Store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
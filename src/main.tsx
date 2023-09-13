import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './app/apiSlice';
import Store from './app/store';
import './index.css';
import './satoshi.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* <ApiProvider api={apiSlice}> */}
      <Router>
        <App />
      </Router>
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>,
);

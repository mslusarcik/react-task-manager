import React from 'react';
import ReactDOM from 'react-dom/client';
import { homePathContext } from './context/HomePathContext';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <homePathContext.Provider value='/react-task-manager'>
    <App />
  </homePathContext.Provider>
);

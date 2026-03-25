import React from 'react';
import './index.css';
import './tailwind-output.css';


import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PopupProvider } from './context/PopupContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PopupProvider>
      <App />
    </PopupProvider>
  </BrowserRouter>
);

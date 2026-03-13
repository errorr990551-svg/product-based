import React from 'react';
import './index.css';
import './tailwind-output.css';


import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PopupProvider } from './context/PopupContext';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <PopupProvider>
        <App />
      </PopupProvider>
    </BrowserRouter>
  </HelmetProvider>
);

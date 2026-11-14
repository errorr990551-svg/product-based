import React from 'react';
import './index.css';
import './tailwind-output.css';


import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PopupProvider } from './context/PopupContext';
import preloadRoute from './preloadRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () =>
  root.render(
    <BrowserRouter>
      <PopupProvider>
        <App />
      </PopupProvider>
    </BrowserRouter>
  );

// Fetch the current page's code first so the pre-rendered page is never
// swapped for a loading spinner (prevents layout shift). Never blocks > 4s.
preloadRoute(window.location.pathname).then(renderApp, renderApp);

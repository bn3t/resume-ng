import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Supports weights 100-900
import '@fontsource-variable/montserrat';
// Supports only weight 400
import '@fontsource-variable/league-gothic/standard.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

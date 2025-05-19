import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ✅ this should be index.css, not output.css
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fruits from './fruits';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <Fruits />
  </React.StrictMode>
);

reportWebVitals();

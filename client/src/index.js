import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { MemoryRouter } from 'react-router-dom'

import './styles/globals.css';
import './styles/reset.css';
import './styles/main.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);



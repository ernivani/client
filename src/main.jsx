import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

import './i18n';

const root = document.getElementById('app');
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

createRoot(root).render(app);
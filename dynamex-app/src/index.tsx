import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/root/App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Router>
  <React.StrictMode>
  <App />
  </React.StrictMode>
  </Router>
);


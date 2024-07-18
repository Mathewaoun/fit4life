import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TranslationProvider } from './go';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './assets/font/font.css';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
);

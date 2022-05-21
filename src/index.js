import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.scss';

import GlobalStyle from './global-styles';
import { theme } from "./theme/theme";
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

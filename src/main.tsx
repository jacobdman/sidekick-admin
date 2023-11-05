import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppProvider from 'context/AppContext/AppProvider';
import AdminThemeProvider from './themeProviders/AdminThemeProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
    <BrowserRouter>
      <AdminThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
      </AdminThemeProvider>
    </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

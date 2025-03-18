import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import GlobalProvider from './context/MyProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </HelmetProvider>
  </React.StrictMode>,
);

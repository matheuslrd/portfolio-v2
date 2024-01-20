import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalProvider from './context/MyProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
);

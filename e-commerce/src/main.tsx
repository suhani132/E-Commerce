import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import ShopcontextProvider from './context/Shopcontext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShopcontextProvider  >
    <App />
    </ShopcontextProvider>
  </React.StrictMode>,
)

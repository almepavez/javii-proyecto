import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './components/CartContext'   // ← AGREGA

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>        {/* ← AGREGA */}
      <App />
    </CartProvider>       {/* ← AGREGA */}
  </React.StrictMode>
)
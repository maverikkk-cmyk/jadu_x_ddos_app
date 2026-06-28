import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Agar tumne koi CSS file banayi hai toh, warna ise hata dena

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

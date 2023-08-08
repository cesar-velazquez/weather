import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { loader } from './components/loader'; 

window.addEventListener('load', function () {
  loader(); // Llama a la función loader después de que la página se haya cargado
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')
)

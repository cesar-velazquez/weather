import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { loader } from './components/loader'; 

window.addEventListener('load', function () {
  loader(); 
});

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');          
  if (savedTheme === 'dark') {      
    document.documentElement.classList.add('dark');          
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,    
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Palette from './CommandPalette/Palette.jsx'

const options = [
  { id: '1', shortcut: 'cs:', title: 'Cambiar el tamaño' }, { id: '2', title: 'Cambiar el color', shortcut: 'cc:' }]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Palette options={options}/>
    <App />
  </React.StrictMode>
)

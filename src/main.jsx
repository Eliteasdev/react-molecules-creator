import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Palette from './CommandPalette/Palette.jsx'
import { options } from './CommandPalette/utils/Options.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Palette options={options}/>
    <App />
  </React.StrictMode>
)

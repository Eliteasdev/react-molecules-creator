import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Palette from './CommandPalette/Palette.jsx'

const options = [
  { id: '1', title: 'Crear un nuevo elemento' }, { id: '2', title: 'Editar un elemento' }, { id: '3', title: 'Borrar un elemento' }, { id: '4', title: 'setValueS', value: 0.3 }]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Palette options={options}/>
    <App />
  </React.StrictMode>
)

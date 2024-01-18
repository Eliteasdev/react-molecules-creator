import React from 'react'

export const Instructions = () => {
  return (
    <div className="instructions">
      <div className="instructions-container">
        <p><span>WASD</span>{' - Moverte en ejes X y Z.'}</p>
        <p><span>E y F</span>{" - Moverte en el eje 'Y'."}</p>
        <p><span>U</span> - Nuevo atomo en la posición donde se esté mirando.</p>
        <p><span>Click Izq.</span> - Crea un nuevo atomo a partir del clickeado.</p>
        <p>
          <span>Numpad</span> - Selecciona la dirección donde se creará el nuevo atomo a
          partir del atomo clickeado.
        </p>
        <p><span>Alt + Click</span> - Borra un atomo.</p>
        <p><span>Ctrl + Click</span> - En dos atomos de forma continua, crea un conector.</p>
      </div>
    </div>
  )
}

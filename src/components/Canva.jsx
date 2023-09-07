import React, { useEffect } from 'react'
import { fabric } from 'fabric'

import { removeCircleOnClick, addCircleOnClick } from '../utils/canvaUtils' // Importa la función desde canvaUtils.js
import MenuCanvas from './MenuCanvas'

export default function Canva () {
  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: window.innerWidth * 0.9,
      height: window.innerHeight * 0.8
    })

    // ! Función para agregar un circulo
    const handleCanvasAddAtom = (event) => {
      addCircleOnClick(canvas, event)
    }

    // ! Función para eliminar un elemento
    const handleCanvasRemove = (event) => {
      removeCircleOnClick(canvas, event)
    }

    canvas.on('mouse:down', handleCanvasAddAtom)
    canvas.on('mouse:down', handleCanvasRemove)

    return () => {
      canvas.dispose()
    }
  }, [])

  return (
    <div>
      <MenuCanvas/>
      <canvas id="canvas" className="border-slate-500 border-2 "></canvas>
    </div>
  )
}

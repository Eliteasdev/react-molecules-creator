import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric'
import { EventEmitter } from 'eventemitter3'

import AtomIcon from '../icons/AtomIcon'
import PointerIcon from '../icons/PointerIcon'
import SingleConnectorIcon from '../icons/SingleConnectorIcon'
import TrashIcon from '../icons/TrashIcon'

export default function Canva () {
  const [option, setOption] = useState('Pointer')
  const canvasRef = React.useRef(null)
  const objects = React.useRef([])
  const eventEmitter = React.useRef(new EventEmitter())

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: window.innerWidth * 0.9,
      height: window.innerHeight * 0.8
    })

    canvasRef.current = canvas

    const handleCanvasClick = (event) => {
      eventEmitter.current.emit('canvasClick', event)
    }

    canvas.on('mouse:down', handleCanvasClick)

    return () => {
      canvas.dispose()
    }
  }, [])

  const addCircle = (event) => {
    const { offsetX, offsetY } = event.e

    const circle = new fabric.Circle({
      left: offsetX,
      top: offsetY,
      radius: 60,
      fill: '#06b6d4',
      selectable: true
    })

    canvasRef.current.add(circle)
    objects.current.push(circle)
    canvasRef.current.renderAll()

    // Cambiar el estado a 'Pointer' automáticamente después de agregar el círculo
    setOption('Pointer')
  }

  const createLine = (circle) => {
    const line = new fabric.Line([circle.left, circle.top, circle.left + 80, circle.top], {
      stroke: '#06b6d4',
      strokeWidth: 15,
      selectable: true
    })

    canvasRef.current.add(line)
    canvasRef.current.renderAll()
  }

  const removeElement = (target) => {
    canvasRef.current.remove(target)
    objects.current = objects.current.filter((obj) => obj !== target)
    canvasRef.current.renderAll()
  }

  useEffect(() => {
    const handleOptionChange = (newOption) => {
      setOption(newOption)
    }

    eventEmitter.current.on('optionChange', handleOptionChange)

    return () => {
      eventEmitter.current.off('optionChange', handleOptionChange)
    }
  }, [])

  useEffect(() => {
    const handleCanvasAction = (event) => {
      const { target } = event

      if (option === 'Atom') {
        addCircle(event)
      } else if (option === 'SingleConnector' && target && target.type === 'circle') {
        createLine(target)
      } else if (option === 'Trash' && target) {
        removeElement(target)
      }
    }

    eventEmitter.current.on('canvasClick', handleCanvasAction)

    return () => {
      eventEmitter.current.off('canvasClick', handleCanvasAction)
    }
  }, [option])

  return (
    <div>
      <div className="flex gap-1 self-start pb-3">
        <button
          onClick={() => eventEmitter.current.emit('optionChange', 'Pointer')}
          className="bg-slate-700 hover:bg-slate-800 p-2 rounded"
        >
          <PointerIcon />
        </button>
        <button
          onClick={() => eventEmitter.current.emit('optionChange', 'Atom')}
          className="bg-slate-700 hover:bg-slate-800 p-2 rounded"
        >
          <AtomIcon />
        </button>
        <button
          onClick={() => eventEmitter.current.emit('optionChange', 'SingleConnector')}
          className="bg-slate-700 hover:bg-slate-800 p-2 rounded"
        >
          <SingleConnectorIcon />
        </button>
        <button
          onClick={() => eventEmitter.current.emit('optionChange', 'Trash')}
          className="bg-slate-700 hover:bg-slate-800 p-2 rounded"
        >
          <TrashIcon />
        </button>
      </div>
      <canvas id="canvas" className="border-slate-500 border-2"></canvas>
    </div>
  )
}

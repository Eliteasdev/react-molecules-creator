import { fabric } from 'fabric'

export const addCircleOnClick = (canvas, event) => {
  const { offsetX, offsetY } = event.e

  const circle = new fabric.Circle({
    left: offsetX,
    top: offsetY,
    radius: 10,
    fill: '#06b6d4',
    selectable: true
  })

  canvas.add(circle)
  canvas.renderAll()
}

export const removeCircleOnClick = (canvas, event) => {
  const target = event.target

  if (target && target.type === 'circle') {
    canvas.remove(target)
    canvas.renderAll()
  }
}

import { useEffect, useState } from 'react'
const ACTIONS_KEYBOARD_MAP = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  KeyE: 'moveUp',
  KeyF: 'moveDown',
  KeyU: 'createAtom',
  Numpad2: 'directionDown',
  Numpad8: 'directionUp',
  Numpad6: 'directionRight',
  Numpad4: 'directionLeft',
  Numpad3: 'directionFront',
  Numpad9: 'directionBack'

}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    // ! Movimiento de la camara
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    moveUp: false,
    moveDown: false,
    // ! Opciones del menú
    // ! Opciones de dirección de creación
    directionUp: false,
    directionDown: false,
    directionRight: false,
    directionLeft: false,
    directionFront: false,
    directionBack: false

  })

  useEffect(() => {
    const handleKeyDown = event => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: true
        }))
      }
    }

    const handleKeyUp = event => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: false
        }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
    }
  }, [])
  return actions
}

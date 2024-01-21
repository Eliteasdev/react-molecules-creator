import { useStore } from '../hooks/useStore'

import { useSphere } from '@react-three/cannon'
import { useState } from 'react'

const DISTANCE_BETWEEN_MOLECULES = 1.0

export function Atom ({ id, position, radius, color }) {
  const [atoms, radiusValue, colorValue, addAtom, removeAtom, directionCreation, addConnector, connector, setConnector] = useStore((state) => [
    state.atoms,
    state.radiusValue,
    state.colorValue,
    state.addAtom,
    state.removeAtom,
    state.directionCreation,
    state.addConnector,
    state.connector,
    state.setConnector
  ])

  // const color = '#aff' // ! Color del átomo
  // const radius = 0.3 // ! Radio del átomo

  const [ref] = useSphere(() => ({
    type: 'Static',
    position
  }))

  const [isHovered, setIsHovered] = useState(false)

  // ! Creacion de los atomos con la tecla asignada

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      onClick={(e) => {
        e.stopPropagation()
        const { x, y, z } = ref.current.position
        if (e.altKey) {
          e.stopPropagation()
          removeAtom(x, y, z)
        } else if (e.ctrlKey) {
          if (connector.length === 0) {
            setConnector([x, y, z])
          } else {
            addConnector(connector, [x, y, z])
            setConnector([])
          }
        } else {
          switch (directionCreation) {
            case 'directionUp':
              addAtom(x, y + DISTANCE_BETWEEN_MOLECULES, z, radiusValue, colorValue)
              addConnector([x, y, z], [x, y + DISTANCE_BETWEEN_MOLECULES, z])
              break
            case 'directionDown':
              addAtom(x, y - DISTANCE_BETWEEN_MOLECULES, z, radiusValue, colorValue)
              addConnector([x, y, z], [x, y - DISTANCE_BETWEEN_MOLECULES, z])
              break
            case 'directionRight':
              addAtom(x + DISTANCE_BETWEEN_MOLECULES, y, z, radiusValue, colorValue)
              addConnector([x, y, z], [x + DISTANCE_BETWEEN_MOLECULES, y, z])
              break
            case 'directionLeft':
              addAtom(x - DISTANCE_BETWEEN_MOLECULES, y, z, radiusValue, colorValue)
              addConnector([x, y, z], [x - DISTANCE_BETWEEN_MOLECULES, y, z])
              break
            case 'directionFront':
              addAtom(x, y, z + DISTANCE_BETWEEN_MOLECULES, radiusValue, colorValue)
              addConnector([x, y, z], [x, y, z + DISTANCE_BETWEEN_MOLECULES])
              break
            case 'directionBack':
              addAtom(x, y, z - DISTANCE_BETWEEN_MOLECULES, radiusValue, colorValue)
              addConnector([x, y, z], [x, y, z - DISTANCE_BETWEEN_MOLECULES])
              break
          }
        }
      }}
    >
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={isHovered ? 'red' : color} transparent={true} opacity={isHovered ? 0.6 : 1}/>
    </mesh>
  )
}

Atom.defaultProps = {
  radius: 0.3,
  color: '#2af'
}

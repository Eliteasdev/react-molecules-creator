import { useStore } from '../hooks/useStore'

import { useSphere } from '@react-three/cannon'
import { useState } from 'react'

const DISTANCE_BETWEEN_MOLECULES = 1.2

export function Atom ({ id, position }) {
  const [addAtom, removeAtom, directionCreation] = useStore((state) => [
    state.addAtom,
    state.removeAtom,
    state.directionCreation
  ])

  const radius = 0.3 // ! Radio del atomo

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
        } else {
          switch (directionCreation) {
            case 'directionUp':
              addAtom(x, y + DISTANCE_BETWEEN_MOLECULES, z)
              break
            case 'directionDown':
              addAtom(x, y - DISTANCE_BETWEEN_MOLECULES, z)
              break
            case 'directionRight':
              addAtom(x + DISTANCE_BETWEEN_MOLECULES, y, z)
              break
            case 'directionLeft':
              addAtom(x - DISTANCE_BETWEEN_MOLECULES, y, z)
              break
            case 'directionFront':
              addAtom(x, y, z + DISTANCE_BETWEEN_MOLECULES)
              break
            case 'directionBack':
              addAtom(x, y, z - DISTANCE_BETWEEN_MOLECULES)
              break
          }
        }
      }}
    >
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={isHovered ? 'red' : '#2af'} transparent={true} opacity={isHovered ? 0.6 : 1}/>
    </mesh>
  )
}

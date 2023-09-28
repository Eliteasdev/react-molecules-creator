import { useStore } from '../hooks/useStore'

import { useSphere } from '@react-three/cannon'
import { useState } from 'react'

export function Atom ({ id, position }) {
  const [addAtom, removeAtom] = useStore(state => [state.addAtom, state.removeAtom])
  const radius = 0.3 // ! Radio del atomo

  const [ref] = useSphere(() => ({
    type: 'Static',
    position
  }))

  const [isHovered, setIsHovered] = useState(false)
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
        addAtom(x, y + 0.8, z)
      }
    }}
    >
      <sphereGeometry args={[radius, 32, 32]} />      <meshStandardMaterial
      color={isHovered ? '#2aa' : '#2af'}
      />
    </mesh>
  )
}

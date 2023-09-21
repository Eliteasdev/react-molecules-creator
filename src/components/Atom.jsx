import { useSphere } from '@react-three/cannon'
import { useState } from 'react'

export function Atom ({ id, position }) {
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
    >
      <sphereGeometry/>
      <meshStandardMaterial
      color={isHovered ? '#2aa' : '#2af'}
      />
    </mesh>
  )
}

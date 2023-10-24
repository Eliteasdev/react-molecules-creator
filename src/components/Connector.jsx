import React from 'react'
import { useBox } from '@react-three/cannon'

export function Connector () {
  const radius = 0.03
  // Define los puntos de inicio y final
  const startPoint = [0, 0, 0]
  const endPoint = [0, 1, 0] // Modifica los puntos según tus necesidades

  // Calcula la altura y la posición del cilindro
  const height = Math.sqrt(
    (endPoint[0] - startPoint[0]) ** 2 +
     (endPoint[1] - startPoint[1]) ** 2 +
     (endPoint[2] - startPoint[2]) ** 2
  )

  const position = [
    (endPoint[0] + startPoint[0]) / 2,
    (endPoint[1] + startPoint[1]) / 2,
    (endPoint[2] + startPoint[2]) / 2
  ]

  // Crea un cuerpo de cilindro estático sin físicas
  const [ref] = useBox(() => ({
    type: 'Static',
    position, // Usamos la posición calculada
    args: [0, 0, 0] // El radio y el largo se establecerán en la geometría
  }))

  return (
     <mesh ref={ref}>
       <cylinderGeometry args={[radius, radius, height, 32]} />
       <meshStandardMaterial color="#2fa" />
     </mesh>
  )
}

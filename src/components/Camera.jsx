import { useKeyboard } from '../hooks/useKeyboard'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { useStore } from '../hooks/useStore'

export function Camera () {
  const [addAtom] = useStore(state => [state.addAtom])
  const CAMERA_SPEED = 3

  const {
    moveForward,
    moveBackward,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    createAtom
  } = useKeyboard()

  const { camera } = useThree()

  const [ref, api] = useSphere(() => ({
    type: 'Dynamic',
    position: [0, 0, 1.5]
  }))

  const pos = useRef([0, 0, 0])
  useEffect(() => {
    api.position.subscribe(p => (
      pos.current = p
    ))
  }, [api.position])

  const vel = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe(p => (
      vel.current = p
    ))
  }, [api.velocity])

  const [createAtomPressed, setCreateAtomPressed] = useState(false)

  useFrame(() => {
    camera.position.copy(
      new Vector3(
        pos.current[0],
        pos.current[1],
        pos.current[2]
      )
    )

    const direction = new Vector3()

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    )

    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      (moveDown ? 1 : 0) - (moveUp ? 1 : 0),
      0
    )

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(CAMERA_SPEED)
      .applyEuler(camera.rotation)

    api.velocity.set(
      direction.x,
      direction.y,
      direction.z
    )

    if (createAtom) {
      if (!createAtomPressed) {
        setCreateAtomPressed(true)

        const cameraDirection = new Vector3(0, 0, -1)
        cameraDirection.applyEuler(camera.rotation)

        // ! Multiplica la dirección por 2 unidades
        cameraDirection.multiplyScalar(1.2)

        // ! Calcula la nueva posición del átomo
        const newAtomPosition = new Vector3(
          pos.current[0] + cameraDirection.x,
          pos.current[1] + cameraDirection.y,
          pos.current[2] + cameraDirection.z
        )

        // ! Llama a la función addAtom con la nueva posición
        addAtom(newAtomPosition.x, newAtomPosition.y, newAtomPosition.z)
      }
    } else {
      setCreateAtomPressed(false)
    }
  })

  return (<mesh ref={ref} />)
}

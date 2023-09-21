import { useKeyboard } from '../hooks/useKeyboard'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'

export function Camera () {
  const CAMERA_SPEED = 6

  const {
    moveForward,
    moveBackward,
    moveLeft,
    moveRight
  } = useKeyboard()

  const { camera } = useThree()

  const [ref, api] = useSphere(() => ({
    type: 'Dynamic',
    position: [1, -1, 5]
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
      0,
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
  })
  return (<mesh ref={ref} />)
}
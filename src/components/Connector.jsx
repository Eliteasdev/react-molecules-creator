import * as THREE from 'three'
import { useStore } from '../hooks/useStore'
export function Connector ({ startPoint, endPoint, id }) {
  const [removeConnector] = useStore((state) => [state.removeConnector])

  const startVector = new THREE.Vector3(startPoint[0], startPoint[1], startPoint[2])
  const endVector = new THREE.Vector3(endPoint[0], endPoint[1], endPoint[2])

  const curve = new THREE.CatmullRomCurve3([startVector, endVector], false)
  const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.03, 8, false)

  const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const tube = new THREE.Mesh(tubeGeometry, tubeMaterial)

  const handleClick = (e) => {
    e.stopPropagation()
    removeConnector(id)
  }

  return <primitive object={tube} onClick={handleClick}/>
}

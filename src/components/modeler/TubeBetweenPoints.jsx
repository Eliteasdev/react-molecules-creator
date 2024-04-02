import * as THREE from 'three'
export function TubeBetweenPoints ({ start, end }) {
  const curve = new THREE.CatmullRomCurve3([start, end], false)
  const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.03, 8, false)
  const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const tube = new THREE.Mesh(tubeGeometry, tubeMaterial)

  return <primitive object={tube} />
}

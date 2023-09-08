import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Molecule () {
  const containerRef = useRef()

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()

    renderer.setClearColor(0xa1a1aa)
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    const sunlight = new THREE.DirectionalLight(0xffffff, 1)
    sunlight.position.set(1, 1, 1).normalize()
    scene.add(sunlight)

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
    const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial)
    const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial)

    sphere1.position.set(-1.5, 0, 0)
    sphere2.position.set(1.5, 0, 0)

    // Creamos un cilindro horizontal que conecta las dos esferas
    const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 32)
    const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff }) // Cambiamos el color a azul
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)

    // Posicionamos el cilindro entre las dos esferas de forma horizontal
    cylinder.position.set(0, 0, 0)
    cylinder.rotation.z = Math.PI / 2 // Rotamos el cilindro 90 grados para que quede horizontal

    scene.add(sphere1)
    scene.add(sphere2)
    scene.add(cylinder)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)

      sphere1.rotation.x += 0.01
      sphere1.rotation.y += 0.01
      sphere2.rotation.x += 0.01
      sphere2.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      renderer.dispose()
    }
  }, [])

  return (
    <div>
      <div ref={containerRef}></div>
    </div>
  )
}

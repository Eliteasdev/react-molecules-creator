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

    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
    const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial)
    const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial)

    sphere1.position.set(-0.8, 0, 0)
    sphere2.position.set(0.8, 0, 0)

    const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 32)
    const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff })
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
    cylinder.rotation.z = Math.PI / 2

    // Agrupamos las esferas y el cilindro en un objeto llamado moleculeGroup
    const moleculeGroup = new THREE.Group()
    moleculeGroup.add(sphere1)
    moleculeGroup.add(sphere2)
    moleculeGroup.add(cylinder)

    scene.add(moleculeGroup)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)

      // Rotamos el grupo entero, incluyendo las esferas y el cilindro
      moleculeGroup.rotation.x += 0.01
      moleculeGroup.rotation.y += 0.01

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

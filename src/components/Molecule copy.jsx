import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Molecule () {
  // Ref para el contenedor del renderizador
  const containerRef = useRef()

  useEffect(() => {
    // ! Creamos una nueva escena Three.js
    const scene = new THREE.Scene()

    // ! Creamos una cámara Three.js con parámetros de perspectiva
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // ! Creamos un renderizador Three.js
    const renderer = new THREE.WebGLRenderer()

    // ! Configuramos el color de fondo del renderizador en blanco
    renderer.setClearColor(0xa1a1aa)

    // ! Configuramos el tamaño del renderizador para que coincida con el tamaño de la ventana
    renderer.setSize(window.innerWidth, window.innerHeight)

    // ! Agregamos el lienzo del renderizador al div del componente
    containerRef.current.appendChild(renderer.domElement)

    // ! Creamos una luz direccional (simulando la luz del sol) con color y intensidad
    const sunlight = new THREE.DirectionalLight(0xffffff, 1)

    // ! Configuramos la posición de la luz en el espacio 3D
    sunlight.position.set(1, 1, 1).normalize()

    // ! Agregamos la luz a la escena
    scene.add(sunlight)

    // ! Creamos una esfera con parámetros de geometría (radio, segmentos)
    const geometry = new THREE.SphereGeometry(1, 32, 32)

    // ! Usamos MeshPhongMaterial para el material de la esfera, que responde a la iluminación
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 })

    // ! Creamos una malla (la esfera) utilizando la geometría y el material
    const sphere = new THREE.Mesh(geometry, material)

    // ! Agregamos la esfera a la escena
    scene.add(sphere)

    // ! Configuramos la posición inicial de la cámara en el espacio 3D
    camera.position.z = 5

    // ! Función de animación para rotar la esfera y renderizar la escena
    const animate = () => {
      requestAnimationFrame(animate)

      // ! Rotamos la esfera en los ejes x e y
      sphere.rotation.x += 0.01
      sphere.rotation.y += 0.01

      // ! Renderizamos la escena desde la perspectiva de la cámara
      renderer.render(scene, camera)
    }

    // ! Iniciamos la animación
    animate()

    // ! Limpieza al desmontar el componente: liberamos recursos del renderizador
    return () => {
      renderer.dispose()
    }
  }, [])
  // !El arreglo vacío indica que esta función de efecto se ejecuta una vez, equivalente a componentDidMount en componentes de clase

  return (
    <div>
      <div ref={containerRef}></div>
    </div>
  )
}

import { useState, useEffect } from 'react'

import { nanoid } from 'nanoid'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Fog } from 'three'

import { useStore } from './hooks/useStore'

import { Molecule } from './components/Molecule'
import { FPV } from './components/FPV'
import { Camera } from './components/Camera'
import { DirectionCreation } from './components/DirectionCreation'
import { Ground } from './components/Ground'
import { Info } from './components/Info'
import { Instructions } from './components/Instructions'

function App () {
  // ! Inicializar el estado
  const [setInitialState] = useStore((state) => [state.setInitialState])
  const initialURL = window.location.pathname.slice(1)
  useEffect(() => {
    if (initialURL.length === 0) {
      setInitialState([
        {
          id: nanoid(),
          pos: [0, 0.6, 0],
          radius: 0.3,
          color: '#2af'
        }
      ], [])
    } else {
      // ! String con el objeto
      const urlDecode = atob(initialURL)
      // ! {atoms: {}, connectors {}}
      const { atoms, connectors } = JSON.parse(urlDecode)
      setInitialState(JSON.parse(atoms), JSON.parse(connectors))
    }
  }, [])

  // ! Activar el panel de instrucciones
  const [instructions, setInstructions] = useState(true)

  const instructionsKeyPressEvent = (event) => {
    if (event.key === 'i') {
      setInstructions(!instructions)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', instructionsKeyPressEvent)

    return () => {
      document.removeEventListener('keydown', instructionsKeyPressEvent)
    }
  }, [instructions])

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <FPV />
        <Physics>
          <Molecule />
          <Camera />
          <Ground />
        </Physics>
      </Canvas>
      {instructions ? <Info /> : <Instructions />}
      <DirectionCreation />
      <div className="pointer">+</div>
    </>
  )
}

export default App

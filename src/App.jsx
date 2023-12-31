import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Molecule } from './components/Molecule'
import { FPV } from './components/FPV'
import { Camera } from './components/Camera'
import { DirectionCreation } from './components/DirectionCreation'
import { Ground } from './components/Ground'

import { TubeBetweenPoints } from './components/TubeBetweenPoints'
import { Info } from './components/Info'

function App () {
  return (
    <>
    <Canvas>
    <Sky sunPosition={[100, 100, 20]}/>
    <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <FPV/>
      <Physics>
        <Molecule/>
        <Camera/>
        <Ground/>
      </Physics>
    </Canvas>
    <Info/>
    <DirectionCreation/>
    <div className='pointer'>+</div>
    </>
  )
}

export default App

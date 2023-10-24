import { useStore } from '../hooks/useStore'
import { Atom } from './Atom'
import { Connector } from './Connector'
export function Molecule () {
  const [atoms] = useStore(state => [state.atoms])
  return (
    <>
      {
        atoms.map(({ id, pos }) => {
          return <Atom
          key={id}
          id={id}
          position={pos}
          />
        })

      }
      <Connector/>
    </>
  )
}

import { useStore } from '../hooks/useStore'
import { Atom } from './Atom'
import { Connector } from './Connector'

export function Molecule () {
  const [atoms] = useStore((state) => [state.atoms])
  const [connectors] = useStore((state) => [state.connectors])
  return (
    <>
      {atoms.map(({ id, pos }) => {
        return <Atom key={id} id={id} position={pos} />
      })}

      {connectors.length !== 0
        ? connectors.map(({ id, start, end }) => {
          return <Connector key={id} startPoint={start} endPoint={end} id={id} />
        })
        : console.log('')}
    </>
  )
}

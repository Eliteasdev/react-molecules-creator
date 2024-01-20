import { nanoid } from 'nanoid'
import { create } from 'zustand'

export const useStore = create((set, get) => ({
  option: 'sphere',
  directionCreation: 'directionUp',
  atoms: [
    // {
    //   id: nanoid(),
    //   pos: [0, 0, 0]
    // }
  ],
  connectors: [
    // {
    //   id: nanoid(),
    //   start: [0, 0, 0],
    //   end: [0, 15, 10]
    // }
  ],
  addAtom: (x, y, z) => {
    set(state => ({
      atoms: [...state.atoms, {
        id: nanoid(),
        pos: [x, y, z]
      }]
    }
    ))
    const atomsJSON = JSON.stringify(useStore.getState().atoms)
    const connectorsJSON = JSON.stringify(useStore.getState().connectors)
    const structureToURL = { atoms: atomsJSON, connectors: connectorsJSON }
    window.history.replaceState(null, null, btoa(JSON.stringify(structureToURL)))
  },
  connector: [],
  addConnector: (start, end) => {
    set(state => ({
      connectors: [...state.connectors, {
        id: nanoid(),
        start,
        end
      }]
    }))
    const atomsJSON = JSON.stringify(useStore.getState().atoms)
    const connectorsJSON = JSON.stringify(useStore.getState().connectors)
    const structureToURL = { atoms: atomsJSON, connectors: connectorsJSON }
    window.history.replaceState(null, null, btoa(JSON.stringify(structureToURL)))
  },
  removeAtom: (x, y, z) => {
    set(state => ({
      atoms: state.atoms.filter(atom => {
        const [X, Y, Z] = atom.pos
        return X !== x || Y !== y | Z !== z
      })
    }))
    const atomsJSON = JSON.stringify(useStore.getState().atoms)
    const connectorsJSON = JSON.stringify(useStore.getState().connectors)
    const structureToURL = { atoms: atomsJSON, connectors: connectorsJSON }
    window.history.replaceState(null, null, btoa(JSON.stringify(structureToURL)))
  },
  removeConnector: (id) => {
    set(state => ({
      connectors: state.connectors.filter(connector => {
        return id !== connector.id
      })
    }))
    const atomsJSON = JSON.stringify(useStore.getState().atoms)
    const connectorsJSON = JSON.stringify(useStore.getState().connectors)
    const structureToURL = { atoms: atomsJSON, connectors: connectorsJSON }
    window.history.replaceState(null, null, btoa(JSON.stringify(structureToURL)))
  },
  setDirectionCreation: (directionCreation) => {
    set(() => ({ directionCreation }))
  },
  setConnector: (vector) => {
    set(() => ({
      connector: vector
    }))
  },
  setInitialState: (atoms, connectors) => {
    set(() => ({
      atoms,
      connectors
    }
    ))
  }

}))

import { nanoid } from 'nanoid'
import { create } from 'zustand'

export const useStore = create((set, get) => ({
  option: 'sphere',
  directionCreation: 'directionUp',
  atoms: [],
  connectors: [
    // {
    // id: nanoid(),
    // start: [0, 0, 0],
    // end: [0, 15, 10]
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
    window.history.replaceState(null, null, btoa(atomsJSON))
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
  },
  removeAtom: (x, y, z) => {
    set(state => ({
      atoms: state.atoms.filter(atom => {
        const [X, Y, Z] = atom.pos
        return X !== x || Y !== y | Z !== z
      })
    }))
  },
  removeConnector: (id) => {
    set(state => ({
      connectors: state.connectors.filter(connector => {
        return id !== connector.id
      })
    }))
  },
  setDirectionCreation: (directionCreation) => {
    set(() => ({ directionCreation }))
  },
  setConnector: (vector) => {
    set(() => ({
      connector: vector
    }))
  },
  setInitialState: (initialState) => {
    set(() => ({
      atoms: initialState
    }
    ))
  }

}))

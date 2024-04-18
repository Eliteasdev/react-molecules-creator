import { nanoid } from 'nanoid'
import { string } from 'three/examples/jsm/nodes/shadernode/ShaderNode'
import { create } from 'zustand'

export const useStore = create((set, get) => ({
  controlMovePalette: false,
  option: 'sphere',
  directionCreation: 'directionUp',
  radiusValue: 0.2,
  colorValue: '#2af',
  setControlMovePalette: (controlMovePalette) => {
    set(() => ({ controlMovePalette }))
  },
  setRadiusValue: (radiusValue) => {
    set(() => ({ radiusValue }))
  },
  setColorValue: (colorValue) => {
    set(() => ({ colorValue }))
  },
  atoms: [],
  connectors: [],
  addAtom: (x, y, z, rad, color) => {
    set((state) => ({
      atoms: [
        ...state.atoms,
        {
          id: nanoid(),
          pos: [x, y, z],
          radius: rad,
          color
        }
      ]
    }))
    const atomsJSON = JSON.stringify(useStore.getState().atoms)
    const connectorsJSON = JSON.stringify(useStore.getState().connectors)
    const structureToURL = { atoms: atomsJSON, connectors: connectorsJSON }
    const pathURL = btoa(JSON.stringify(structureToURL))

    window.history.replaceState(
      null,
      null,
      pathURL
    )
  },
  connector: [],
  addConnector: (start, end) => {
    set((state) => ({
      connectors: [
        ...state.connectors,
        {
          id: nanoid(),
          start,
          end
        }
      ]
    }))
    const atomsJSON = JSON.stringify(useStore.getState().atoms)
    const connectorsJSON = JSON.stringify(useStore.getState().connectors)
    const structureToURL = { atoms: atomsJSON, connectors: connectorsJSON }
    window.history.replaceState(
      null,
      null,
      btoa(JSON.stringify(structureToURL))
    )
  },
  removeAtom: (x, y, z) => {
    set((state) => ({
      atoms: state.atoms.filter((atom) => {
        const [X, Y, Z] = atom.pos
        return X !== x || (Y !== y) || (Z !== z)
      })
    }))
    const atomsJSON = JSON.stringify(useStore.getState().atoms)
    const connectorsJSON = JSON.stringify(useStore.getState().connectors)
    const structureToURL = { atoms: atomsJSON, connectors: connectorsJSON }
    window.history.replaceState(
      null,
      null,
      btoa(JSON.stringify(structureToURL))
    )
  },
  removeConnector: (id) => {
    set((state) => ({
      connectors: state.connectors.filter((connector) => {
        return id !== connector.id
      })
    }))
    const atomsJSON = JSON.stringify(useStore.getState().atoms)
    const connectorsJSON = JSON.stringify(useStore.getState().connectors)
    const structureToURL = { atoms: atomsJSON, connectors: connectorsJSON }
    window.history.replaceState(
      null,
      null,
      btoa(JSON.stringify(structureToURL))
    )
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
    }))
  },
  changeSizeColorAtomByIDAtom: (idAtom, color, radius) => {
    set((state) => ({
      atoms: state.atoms.map((atom) => {
        if (idAtom === atom.idAtom) {
          atom.color = color
          atom.radius = radius
        }
        return atom
      })
    }))
  }
}))

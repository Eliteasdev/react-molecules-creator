import { nanoid } from 'nanoid'
import { create } from 'zustand'

export const useStore = create(set => ({
  option: 'sphere',
  directionCreation: 'directionUp',
  atoms: [
    {
      id: nanoid(),
      pos: [0, 0, 0]
    }
  ],
  addAtom: (x, y, z) => {
    set(state => ({
      atoms: [...state.atoms, {
        id: nanoid(),
        pos: [x, y, z]
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
  setOption: (option) => {
    set(() => ({ option }))
  },
  setDirectionCreation: (directionCreation) => {
    set(() => ({ directionCreation }))
  }

}))

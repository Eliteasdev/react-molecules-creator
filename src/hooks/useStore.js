import { nanoid } from 'nanoid'
import { create } from 'zustand'

export const useStore = create(set => ({
  atoms: [
    {
      id: nanoid(),
      pos: [0, 0, 0]
    },
    {
      id: nanoid(),
      pos: [2, -2, -2]
    }
  ]
}))

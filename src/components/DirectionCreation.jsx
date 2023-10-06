import { useEffect } from 'react'
import { useKeyboard } from '../hooks/useKeyboard'
import { useStore } from '../hooks/useStore'

export function DirectionCreation () {
  const [directionCreation, setDirectionCreation] = useStore(state => [state.directionCreation, state.setDirectionCreation
  ])

  const {
    directionUp,
    directionDown,
    directionRight,
    directionLeft,
    directionFront,
    directionBack
  } = useKeyboard()

  useEffect(() => {
    const options = {
      directionUp,
      directionDown,
      directionRight,
      directionLeft,
      directionFront,
      directionBack
    }

    const selectedDirection = Object
      .entries(options)
      .find(([option, isEnabled]) => isEnabled)
    if (selectedDirection) {
      const [optionName] = selectedDirection
      setDirectionCreation(optionName)
    }
  }, [directionUp, directionDown, directionRight, directionLeft, directionFront, directionBack])
  return (
  <></>
  )
}
